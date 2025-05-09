const { Telegraf } = require('telegraf');
const fs = require('fs').promises;
const path = require('path');

const bot = new Telegraf('8115112625:AAF7aQuiqBU_XlZypAw5CvkaU5o6x1uP8fY');

const accountPath = path.join(__dirname, '../src/data/account.json');
const transactionsPath = path.join(__dirname, '../src/data/transactions.json');

async function saveJSON(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Saved JSON to ${filePath}`);
  } catch (err) {
    console.error(`❌ Failed to save JSON: ${filePath}`, err);
    throw err;
  }
}

bot.start((ctx) => {
  ctx.reply('👋 Welcome to your admin panel\nUse:\n/account\n/update_account\n/add_tx\n/remove_tx');
});

bot.command('account', async (ctx) => {
  try {
    const data = await fs.readFile(accountPath, 'utf-8');
    const acc = JSON.parse(data);
    ctx.replyWithMarkdown(`*Account Info:*\nTitle: ${acc.title}\nNumber: ${acc.accountNumber}\nSort Code: ${acc.sortCode}\nBalance: £${acc.balance}`);
  } catch (e) {
    console.error('❌ /account error:', e);
    ctx.reply('❌ Failed to load account data.');
  }
});

bot.command('update_account', async (ctx) => {
  try {
    const input = ctx.message.text.replace('/update_account', '').trim();
    const [title, number, sort, balance] = input.split('|');

    if (!title || !number || !sort || !balance) {
      return ctx.reply('⚠️ Format: /update_account Title|AccountNumber|SortCode|Balance');
    }

    const updated = { title, accountNumber: number, sortCode: sort, balance };
    await saveJSON(accountPath, updated);
    ctx.reply('✅ Account updated successfully');
  } catch (err) {
    console.error('❌ /update_account error:', err);
    ctx.reply('❌ Failed to update account data.');
  }
});

bot.command('add_tx', async (ctx) => {
  try {
    const input = ctx.message.text.replace('/add_tx', '').trim();
    const [group, name, amountStr, icon] = input.split('|');
    const amount = parseFloat(amountStr);

    if (!group || !name || isNaN(amount) || !icon) {
      return ctx.reply('⚠️ Format: /add_tx Group|Name|Amount|IconPath');
    }

    const txs = JSON.parse(await fs.readFile(transactionsPath, 'utf-8'));
    const section = txs.find(s => s.label.toLowerCase() === group.toLowerCase());

    const newTx = { name, amount, icon };

    if (section) {
      section.transactions.push(newTx);
    } else {
      txs.push({ label: group, transactions: [newTx] });
    }

    await saveJSON(transactionsPath, txs);
    ctx.reply(`✅ Transaction "${name}" added to "${group}"`);
  } catch (err) {
    console.error('❌ /add_tx error:', err);
    ctx.reply('❌ Failed to add transaction.');
  }
});

bot.command('remove_tx', async (ctx) => {
  try {
    const name = ctx.message.text.replace('/remove_tx', '').trim();
    if (!name) return ctx.reply('⚠️ Format: /remove_tx Name');

    const txs = JSON.parse(await fs.readFile(transactionsPath, 'utf-8'));
    for (const section of txs) {
      section.transactions = section.transactions.filter(tx => tx.name !== name);
    }

    await saveJSON(transactionsPath, txs);
    ctx.reply(`🗑️ Removed all transactions with name: "${name}"`);
  } catch (err) {
    console.error('❌ /remove_tx error:', err);
    ctx.reply('❌ Failed to remove transaction.');
  }
});

bot.launch();
console.log('🤖 Bot is running');
