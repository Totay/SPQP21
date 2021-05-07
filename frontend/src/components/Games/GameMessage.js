import style from '../../stylesheets/GameMessage.module.css';

const GameMessage = ({title, message, success, onCloseMessage}) => {
  return (
    <div className={`${style.game_message_wrapper} ${success ? style.game_message_success : style.game_message_success}`}>
      <div className={style.game_message}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onCloseMessage}>Close</button>
      </div>
    </div>
  )
}

export default GameMessage
