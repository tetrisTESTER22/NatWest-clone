const { Telegraf, Markup } = require('telegraf');
const fs = require('fs').promises;
const path = require('path');

const bot = new Telegraf('8115112625:AAF7aQuiqBU_XlZypAw5CvkaU5o6x1uP8fY');

const credentials = {
  admin1: { password: 'pass1', tenant: 'ad1' },
  admin2: { password: 'pass2', tenant: 'ad2' },
  admin3: { password: 'pass3', tenant: 'ad3' },
  admin4: { password: 'pass4', tenant: 'ad4' },
  admin5: { password: 'pass5', tenant: 'ad5' },
  admin6: { password: 'pass6', tenant: 'ad6' },
};

const loginSteps = new Map();
const sessions = new Map();
const addTxSteps = new Map();
const clearGroupSteps = new Map();
const updateAccountSteps = new Map();

function getPaths(tenant) {
  return {
    account: path.join(__dirname, `../src/data/${tenant}/account.json`),
    transactions: path.join(__dirname, `../src/data/${tenant}/transactions.json`),
  };
}

async function saveJSON(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

bot.start((ctx) => {
  const id = ctx.from.id;
  if (sessions.has(id)) {
    ctx.reply(`✅ Вы уже вошли как ${sessions.get(id)}`);
    showMainMenu(ctx);
  } else {
    ctx.reply('Добро пожаловать!', Markup.keyboard([['🔐 Войти']]).resize());
  }
});

bot.hears('🔐 Войти', (ctx) => {
  loginSteps.set(ctx.from.id, { step: 'login' });
  ctx.reply('Введите логин:');
});

bot.hears('📄 Показать аккаунт', async (ctx) => {
  const tenant = sessions.get(ctx.from.id);
  const { account } = getPaths(tenant);
  try {
    const data = JSON.parse(await fs.readFile(account, 'utf-8'));
    const msg = `Account Info:\nTitle: ${data.title}\nNumber: ${data.accountNumber}\nSort Code: ${data.sortCode}\nBalance: £${data.balance}`;
    return ctx.reply(msg);
  } catch {
    return ctx.reply('❌ Не удалось загрузить account.json');
  }
});

bot.hears('📋 Все транзакции', async (ctx) => {
  const tenant = sessions.get(ctx.from.id);
  const { transactions } = getPaths(tenant);
  try {
    const txs = JSON.parse(await fs.readFile(transactions, 'utf-8'));
    if (txs.length === 0) return ctx.reply('❗ Транзакций нет');

    let msg = 'Все транзакции:\n';
    txs.forEach(group => {
      msg += `\n${group.label}:\n`;
      group.transactions.forEach(tx => {
        msg += `- ${tx.name} | £${parseFloat(tx.amount).toFixed(2)} | ${tx.icon}\n`;
      });
    });

    return ctx.reply(msg);
  } catch {
    return ctx.reply('❌ Ошибка при загрузке транзакций');
  }
});

bot.hears('✏️ Изменить аккаунт', (ctx) => {
  updateAccountSteps.set(ctx.from.id, { step: 'title' });
  ctx.reply('Введите новое название аккаунта:');
});

bot.hears('➕ Добавить в Pending', (ctx) => startAddTxFlow(ctx, 'Pending'));
bot.hears('➕ Добавить в Today', (ctx) => startAddTxFlow(ctx, 'Today'));

bot.hears('🧹 Очистить Pending', async (ctx) => startClearGroupFlow(ctx, 'Pending'));
bot.hears('🧹 Очистить Today', async (ctx) => startClearGroupFlow(ctx, 'Today'));

function startClearGroupFlow(ctx, groupName) {
  const id = ctx.from.id;
  clearGroupSteps.set(id, groupName);
  return clearGroup(ctx, groupName);
}

async function clearGroup(ctx, groupName) {
  const tenant = sessions.get(ctx.from.id);
  const { transactions } = getPaths(tenant);
  try {
    const txs = JSON.parse(await fs.readFile(transactions, 'utf-8'));
    for (const group of txs) {
      if (group.label.toLowerCase() === groupName.toLowerCase()) {
        group.transactions = [];
      }
    }
    await saveJSON(transactions, txs);
    return ctx.reply(`🧹 Группа ${groupName} очищена.`);
  } catch {
    return ctx.reply('❌ Ошибка при очистке группы');
  }
}

function showMainMenu(ctx) {
  return ctx.reply('📋 Главное меню:', Markup.keyboard([
    ['📄 Показать аккаунт', '📋 Все транзакции'],
    ['➕ Добавить в Pending', '➕ Добавить в Today'],
    ['🧹 Очистить Pending', '🧹 Очистить Today'],
    ['✏️ Изменить аккаунт']
  ]).resize());
}

function startAddTxFlow(ctx, group) {
  const id = ctx.from.id;
  addTxSteps.set(id, { step: 'name', group });
  ctx.reply(`📝 Добавление в ${group}. Введите название транзакции:`);
}

bot.on('text', async (ctx) => {
  const id = ctx.from.id;
  const text = ctx.message.text.trim();

  if (loginSteps.has(id)) {
    const state = loginSteps.get(id);
    if (state.step === 'login') {
      state.login = text;
      state.step = 'password';
      loginSteps.set(id, state);
      return ctx.reply('Введите пароль:');
    }
    if (state.step === 'password') {
      const creds = credentials[state.login];
      if (creds && creds.password === text) {
        sessions.set(id, creds.tenant);
        loginSteps.delete(id);
        ctx.reply(`✅ Успешный вход как ${state.login}`);
        return showMainMenu(ctx);
      } else {
        loginSteps.delete(id);
        return ctx.reply('❌ Неверный логин или пароль. Попробуйте снова.');
      }
    }
  }

  if (!sessions.has(id)) return ctx.reply('⚠️ Сначала войдите с помощью /start');
  const tenant = sessions.get(id);
  const { account, transactions } = getPaths(tenant);

  if (updateAccountSteps.has(id)) {
    const state = updateAccountSteps.get(id);
    const data = JSON.parse(await fs.readFile(account, 'utf-8'));

    if (state.step === 'title') {
      state.title = text;
      state.step = 'number';
      updateAccountSteps.set(id, state);
      return ctx.reply('Введите номер счёта:');
    }
    if (state.step === 'number') {
      state.accountNumber = text;
      state.step = 'sort';
      updateAccountSteps.set(id, state);
      return ctx.reply('Введите sort code:');
    }
    if (state.step === 'sort') {
      state.sortCode = text;
      state.step = 'balance';
      updateAccountSteps.set(id, state);
      return ctx.reply('Введите баланс:');
    }
    if (state.step === 'balance') {
      const balance = parseFloat(text);
      if (isNaN(balance)) return ctx.reply('⚠️ Введите корректное число');
      data.title = state.title;
      data.accountNumber = state.accountNumber;
      data.sortCode = state.sortCode;
      data.balance = balance;
      await saveJSON(account, data);
      updateAccountSteps.delete(id);
      ctx.reply('✅ Аккаунт обновлён');
      return showMainMenu(ctx);
    }
  }

  if (addTxSteps.has(id)) {
    const state = addTxSteps.get(id);
    if (state.step === 'name') {
      state.name = text;
      state.step = 'amount';
      addTxSteps.set(id, state);
      return ctx.reply('Введите сумму транзакции:');
    }
    if (state.step === 'amount') {
      const amount = parseFloat(text);
      if (isNaN(amount)) return ctx.reply('⚠️ Введите корректную сумму');
      state.amount = amount;
      state.step = 'icon';
      addTxSteps.set(id, state);
      return ctx.reply('Введите иконку (путь к svg или emoji):');
    }
    if (state.step === 'icon') {
      const icon = text;
      const txs = JSON.parse(await fs.readFile(transactions, 'utf-8'));
      const section = txs.find((s) => s.label.toLowerCase() === state.group.toLowerCase());
      const newTx = { name: state.name, amount: state.amount, icon };
      if (section) {
        section.transactions.push(newTx);
      } else {
        txs.push({ label: state.group, transactions: [newTx] });
      }
      await saveJSON(transactions, txs);
      addTxSteps.delete(id);
      ctx.reply(`✅ Транзакция добавлена в ${state.group}`);
      return showMainMenu(ctx);
    }
  }

  if (text === '/account') {
    try {
      const data = JSON.parse(await fs.readFile(account, 'utf-8'));
      const msg = `Account Info:\nTitle: ${data.title}\nNumber: ${data.accountNumber}\nSort Code: ${data.sortCode}\nBalance: £${data.balance}`;
      return ctx.reply(msg);
    } catch {
      return ctx.reply('❌ Не удалось загрузить account.json');
    }
}
});

bot.launch();
console.log('🤖 Бот запущен и ждёт команд');
