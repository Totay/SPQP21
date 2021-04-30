import {useEffect} from 'react';
import style from '../stylesheets/Chat.module.css';

const Chat = ({name, messages}) => {

  let formattedChat = "";
  let me = {
    id: 1,
    name: "Totee Setthachuea"
  };


  useEffect(() => {
    console.log('render')
  });

  return (
    <div className={style.chat}>
      <div className={style.chat_header}>
        <img src="" alt=""/>
        <h2>{name}</h2>
      </div>
      <div className={style.chat_messages}>
        {
          messages.map(message => {
            if(message.from == me.id) {
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
      <div className={style.chat_input}>
        <form>
          <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here"></textarea>
        </form>
      </div>
    </div>
  )
}

export default Chat
