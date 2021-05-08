// Dependencies
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();
const setupDB = require('./models/Setup');

// variables
const app = express();
const sessionStoreOptions = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: 'matchpoint',
};

// set up database
setupDB();

let sessionStore = new MySQLStore(sessionStoreOptions);

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(session({
  secret: "asjdflkajsdlk;fjas",
  saveUninitialized: false,
  resave: false,
  store: sessionStore,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}))


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});