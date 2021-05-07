// import the games
import Hangman from './Games/Hangman';
const Games = ({friend, onFinishedGame}) => {
  return (
    <section>
      <Hangman friend={friend} onFinishedGame={onFinishedGame}></Hangman>
    </section>
  )
}

export default Games
