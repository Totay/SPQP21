// dependencies
const express = require('express');
const router = express.Router();

// import models
const chatModel = require('../models/ChatModel');

// create / save chats
router.post('/', (req,res) => {
  chatModel.createChat(req.body).then((result) => {
    return res.json({
      status: 1,
      message: "chat message saved",
      chat: result[1][0]
    });
  }).catch((err) => {
    console.log(err);
  });
});

// get the chat logs
router.post('/logs', (req,res) => {
  chatModel.getChat(req.body.user_one, req.body.user_two).then((chats) => {
    return res.json({
      status: 1,
      message: "chat retrieved",
      chats: chats
    });
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;