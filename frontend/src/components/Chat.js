import {useEffect, useState} from 'react';
import style from '../stylesheets/Chat.module.css';

const Chat = ({friend, messages, onSend}) => {

  let me = {
    id: 1,
    name: "Totee Setthachuea"
  };


  const [myMessage, setMyMessage] = useState('');
  const [showChat, setShowChat] = useState(true);

  const onPressEnter = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if(myMessage !== '') {
        onSend(myMessage);
        setMyMessage('');
        return;
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
            if(message.from === me.id) {
              return (
                <div key={message.id} className={style.chat_message_self}>
                  <p>{message.message}</p>
                </div>
              )
            }

            return (
              <div key={message.id} className={style.chat_message_other}>
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
