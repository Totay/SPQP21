import {useEffect, useState, useContext} from 'react';
import { UserContext } from '../components/Context/UserContext';
import style from '../stylesheets/Chat.module.css';
import axios from 'axios';
import io from 'socket.io-client';

const Chat = ({friend}) => {
  const userContext = useContext(UserContext);

  const [messages, setMessages] = useState([]);

  const [socket, setSocket] = useState();
  const [myMessage, setMyMessage] = useState('');
  const [showChat, setShowChat] = useState(true);

  // on mount
  useEffect(() => {

    const s = io();
    s.emit('change-room', userContext.user.id);
    setSocket(s);

    return () => {
      s.disconnect();
    }
  },[])

  // deal with changing friends
  useEffect(() => {
    console.log('changing friends')
    let user_one = userContext.user.id;
    let user_two = friend.id;
    if(user_one > user_two) {
      user_one = friend.id;
      user_two = userContext.user.id;
    }

    let payload = {
      user_one,
      user_two
    }

    axios.post('/api/chat/logs', payload).then((res) => {
      setMessages(res.data.chats);
    })
  },[friend])

  // receiving messages
  useEffect(() => {
    if(socket == null) return
    console.log("receiving");
    socket.on('receive-message', (payload) => {
      setMessages([{chat_id: payload.chat_id, sender: payload.sender, message: payload.message}, ...messages]);
    })

    return () => {
      socket.off('receive-message');
    }
  },[socket, messages])

  const onPressEnter = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if(myMessage !== '') {
        let user_one = userContext.user.id;
        let user_two = friend.id;
        if(user_one > user_two) {
          user_one = friend.id;
          user_two = userContext.user.id;
        }

        let payload = {
          user_one,
          user_two,
          message: myMessage,
          sender: userContext.user.id
        }

        axios.post('/api/chat/', payload).then((res) => {
          setMessages([res.data.chat, ...messages]);
          const payload = {
            chat_id: res.data.chat.chat_id,
            message: myMessage,
            to: friend.id,
            sender: userContext.user.id
          }
          socket.emit("send-message", payload);
          setMyMessage('');
          return;
        })
      }
    }
  }

  const displayStyle = {
    display: showChat ? '' : 'none',
  };

  const chatHeightStyle = {
    height: showChat ? '60%' : '65px',
  };

  return (
    <div className={style.chat} style={chatHeightStyle}>
      <div className={style.chat_header} onClick={() => setShowChat(!showChat)}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={friend.img} alt=""/>
          <h2>{friend.name}</h2>
        </div>
      </div>
      <div className={style.chat_messages} style={displayStyle}>
        {
          messages.map(message => {
            if(message.sender === userContext.user.id) {
              return (
                <div key={`chat_${message.chat_id}`} className={style.chat_message_self}>
                  <p>{message.message}</p>
                </div>
              )
            }

            return (
              <div key={`chat_${message.chat_id}`} className={style.chat_message_other}>
                <p>{message.message}</p>
              </div>
            )
          })
        }
      </div>
      <div className={style.chat_input} style={displayStyle}>
        <form className={style.chat_form}>
          <textarea placeholder="Type your message here" value={myMessage} onChange={(e) => setMyMessage(e.target.value)} cols="30" rows="10" onKeyDown={onPressEnter}></textarea>
        </form>
      </div>
    </div>
  )
}

export default Chat
