const db = require('./db.js');

/**
 * Create Chat
 * 
 * Insert a chat entry into the database
 * @param chat js object containing the data for the table
 */
const createChat = (chat) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO chats (user_one, user_two, sender, message) VALUES (?,?,?,?); SELECT * FROM chats where chat_id = LAST_INSERT_ID()";
    db.query(sql, [chat.user_one, chat.user_two, chat.sender, chat.message], (err, result) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

/**
 * Get Chat
 * 
 * Get the chat logs
 * @param user_one first person
 * @param user_two second person
 */
const getChat = (user_one, user_two) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM chats where user_one = ? AND user_two = ? ORDER BY chat_id DESC LIMIT 30";
    db.query(sql, [user_one, user_two], (err, result) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

module.exports = {
  createChat,
  getChat
};