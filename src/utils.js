const fs = require("fs/promises");
const path = require("path");
const dbPath = path.resolve("data", "db.json");

/**
 * Thi is database data write function
 * @returns {any} data
 */
exports.readFile = async () => {
  const data = await fs.readFile(dbPath);
  return JSON.parse(data);
};

/**
 * This is database write Function
 * @param {any} data}
 */
exports.writeFile = async (data) => {
  await fs.writeFile(dbPath, JSON.stringify(data));
};
