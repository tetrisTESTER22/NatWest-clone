const fs = require('fs').promises;
const path = require('path');

const readData = async (type) => {
  const file = path.join(__dirname, '..', 'data', `${type}.json`);
  const content = await fs.readFile(file, 'utf-8');
  return JSON.parse(content);
};

const writeData = async (type, data) => {
  const file = path.join(__dirname, '..', 'data', `${type}.json`);
  await fs.writeFile(file, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
