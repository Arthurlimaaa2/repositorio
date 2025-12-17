const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/users.db', (err) => {
  if (err) console.error(err.message);
  console.log('Conectado ao banco de dados.');
});

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    age INTEGER NOT NULL
  )
`);

module.exports = db;