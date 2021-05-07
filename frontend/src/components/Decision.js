import style from '../stylesheets/Decision.module.css';
const Decision = ({friend, onMadeDecision}) => {

  // pass friend
  const pass = () => {
    console.log("User passed")
    onMadeDecision()
  }

  // befried
  const befriend = () => {
    console.log("User befriended");
    onMadeDecision()
  }
  
  return (
    <div className={style.decision}>
      <div className={style.decision_container}>
        <div className={style.decision_header}>
          <h2>Become friends with {friend.name}?</h2>
        </div>
        <img src={friend.img} alt=""/>
        <div className={style.decision_buttons}>
          <button onClick={() => pass()}>Pass</button>
          <button onClick={() => befriend()}>Friend</button>
        </div>
      </div>
    </div>
  )
}

export default Decision
