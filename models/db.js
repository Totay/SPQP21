const mysql = require('mysql');
require('dotenv').config('../.env');
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  dateStrings: true,
  database: 'matchpoint',
  multipleStatements: true,
})

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySql connected');
});

module.exports = db;