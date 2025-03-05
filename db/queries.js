const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}


async function insertUsername(username) {
  await pool.query("INSERT INTO messages (username) VALUES ($1)", [username]);
}

async function insertMessages(text) {
    await pool.query("INSERT INTO messages (text) VALUES ($1)", [text]);
  }


module.exports = {
  getAllUsernames,
  insertUsername,
  insertMessages
};