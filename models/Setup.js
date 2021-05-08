const db = require('./db.js');

const createUsersTable = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS users(
        user_id int AUTO_INCREMENT PRIMARY KEY,
        email varchar(255) NOT NULL,
        password text NOT NULL,
        name varchar(255) NOT NULL,
        age int,
        dob date,
        bio text,
        interests json,
        friends json,
        preferences json
      )
    `

    db.query(sql, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

const createChatTable = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS chats(
        chat_id int AUTO_INCREMENT PRIMARY KEY,
        user_a int,
        user_b int,
        chat_log json,
        FOREIGN KEY(user_a) REFERENCES users(user_id),
        FOREIGN KEY(user_b) REFERENCES users(user_id)
      )
    `

    db.query(sql, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

const createGameTable = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS games(
        game_id int AUTO_INCREMENT PRIMARY KEY,
        game_type varchar(255),
        user_id int,
        game_state json,
        FOREIGN KEY(user_id) REFERENCES users(user_id)
      )
    `

    db.query(sql, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

const createPasswordResetTable = () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS password_reset(
        pwd_id int AUTO_INCREMENT PRIMARY KEY,
        user_id int,
        token text,
        expiration date,
        FOREIGN KEY(user_id) REFERENCES users(user_id)
      )
    `

    db.query(sql, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

const setupDB = () => {
  createUsersTable().then(() => {
    createGameTable().then(() => {
      createChatTable().then(() => {
        createPasswordResetTable().then(() => {
          console.log("Database created");
        })
      })
    })
  });
}

module.exports = setupDB;