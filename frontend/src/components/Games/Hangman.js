import style from '../../stylesheets/Hangman.module.css';
import {useRef, useEffect, createRef, useState} from 'react';
import GameMessage from './GameMessage';
import axios from 'axios';

const Hangman = ({friend, onFinishedGame}) => {

  // reference to the canvas
  const personRef = useRef();

  // game state and messages
  const [word, setWord] = useState("");
  const wordRef = [];
  const [title, setTitle] = useState("Game Over");
  const [success, setSuccess] = useState(false);
  const [gameMessage, setGameMessage] = useState("Try sending a message asking for hints");
  const [myInput, setMyInput] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // game points
  const [numLetters, setNumLetters] = useState(0);
  const [point, setPoint] = useState(0);
  const [userInput, setUserInput] = useState("bzd");
  const [mistakes, setMistakes] = useState(0);

  // render the word boxes
  const renderWordBox = (word, userInput) => {
    if(word == null) {
      return;
    }
    
    let items = []
    for(let i = 0; i < word.length; i++) {
      wordRef.push(createRef());
      items.push(
        <div key={`letters_${word[i]}_${i}`} className={style.hangman_letters_box}>
          <p ref={wordRef[i]}>{userInput.includes(word[i]) ? word[i] : ''}</p>
        </div>
      );
    }

    return items;
  }

  // call durng mounting
  useEffect(() => {
    // get the word
    let tmpWord = '';
    axios.get('https://jsonplaceholder.cypress.io/todos/2').then((res) => {
      setWord("Running")
      tmpWord = "Running";

      // draw the hanger
      drawHanger();

      // variables for calculating points
      let buffer = '';
      let tmpNum = 0;

      // calculate points
      for(let i = 0; i < tmpWord.length; i++) {
        if(!buffer.includes(tmpWord[i]) && tmpWord[i] !== ' ') {
          tmpNum++;
          buffer.concat(tmpWord[i]);
        }
      }

      // set state and intialize game
      setNumLetters(tmpNum);
      initializeGame(tmpWord, userInput)
    })
  }, []);

  // drawing the man
  const drawHead = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.arc(150,70, 30, 0, Math.PI * 2);
    ctx.fill();
  }

  const drawHanger = () => {
    const ctx = personRef.current.getContext('2d');
    personRef.current.width = 300;
    personRef.current.height = 400;
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#b6bdc3';
    ctx.lineTo(20,20);
    ctx.lineTo(20,300);
    ctx.moveTo(20,20);
    ctx.lineTo(150,20);
    ctx.lineTo(150,40)
    ctx.stroke();
  }

  const drawBody = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.moveTo(150,100);
    ctx.lineTo(150,200);
    ctx.stroke();
  }

  const drawLeftArm = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.moveTo(150,130);
    ctx.lineTo(100,160);
    ctx.stroke();
  }

  const drawRightArm = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.moveTo(150,130);
    ctx.lineTo(200,160);
    ctx.stroke();
  }

  const drawLeftLeg = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.moveTo(150,200);
    ctx.lineTo(100,250);
    ctx.stroke();
  }

  const drawRightLeg = (e) => {
    const ctx = personRef.current.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#de4545';
    ctx.moveTo(150,200);
    ctx.lineTo(200,250);
    ctx.stroke();
  }

  // collection of drawing functions
  const drawFunc = [drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg];

  // initialize the game based on default values
  const initializeGame = (word, userInput) => {
    let mist = mistakes;

    // loop through each user input
    if(userInput.length > 0) {
      let lower = word.toLowerCase();
      let input = userInput;
      input = input.toLowerCase();

      // set current points
      let currentPoint = point;

      // for every letter of the user input
      for(let j = 0; j < userInput.length; j++) {
        if(lower.includes(input[j])) {
          // find how many of the input letter there are in the word
          let points = 0;
          for(let i = 0; i < lower.length; i++) {
            if(lower[i] == input[j]) {
              points++;
            }
          }

          // update points
          currentPoint = currentPoint + points;
          setPoint(currentPoint);
        } else {
          // set mistakes and raw person
          if(mist < 6) {
            drawFunc[mist]();
            mist++;
          }
        }
      }
      setMistakes(mist);
    }
  }

  // process user input
  const processInput = (e) => {
    e.preventDefault();
    if(mistakes >= numLetters) {
      setMyInput('');
      return
    }

    let lower = word.toLowerCase();
    let input = myInput;
    input = input.toLowerCase();
    setUserInput(userInput.concat(input))
    let currentPoint = point;
    if(lower.includes(input)) {
      let points = 0;
      for(let i = 0; i < lower.length; i++) {
        if(lower[i] == input) {
          wordRef[i].current.innerHTML = word[i];
          points++;
        }
      }
      currentPoint = currentPoint + points;
      setPoint(currentPoint);
    } else {
      setMistakes(prev => prev +1);
      drawFunc[mistakes]();

      if(mistakes + 1 >= 6) {
        setShowMessage(true);
      }
    }
    
    if(currentPoint == numLetters) {
      setShowMessage(true);
      setTitle("You Win!");
      setGameMessage("Congratulations you've guessed the interest.  Now have a chat with the person.")
    }
    setMyInput('');
  }

  // close the message
  const onCloseMessage = () => {
    setShowMessage(false);
    if(mistakes < 6) {
      onFinishedGame()
    }
  }

  // reset the game state
  const resetGame = () => {
    setPoint(0);
    setMistakes(0);
    setMyInput('');
    setUserInput('');

    for(let i = 0; i < word.length; i++) {
      wordRef[i].current.innerHTML = '';
    }

    const ctx = personRef.current.getContext('2d');
    ctx.clearRect(95, 40, 300, 250);
  }

  // return dom elements
  return (
    <div className={style.hangman}>
      <div className="section-header">
        <h2>Hangman</h2>
      </div>
      <div className={style.hangman_display}>
        <p>Something {friend.name} is interested in</p>
        <div className="hangman_person">
          <canvas ref={personRef}></canvas>
        </div>
      </div>
        {
          showMessage ? <GameMessage title={title} message={gameMessage} success={success} onCloseMessage={onCloseMessage}></GameMessage> : null
        }
      <div className={style.hangman_used_letters}>
        <h3>Used Letters</h3>
        <div className="hangman_used_letters_list">
          <p>{userInput}</p>
        </div>
      </div>
      <div className={style.hangman_letters}>
        {
          renderWordBox(word, userInput)
        }
      </div>
      {
        (mistakes < 6 && point != numLetters) &&
        <div className={style.hangman_input}>
          <form onSubmit={processInput}>
            <p>Enter a letter</p>
            <input type="text" value={myInput} onChange={(e) => setMyInput(e.target.value)}/>
          </form>
        </div>
      }
      {
        (mistakes >= 6 || point >= numLetters) &&
        <div className={style.hangman_startover}>
          <button onClick={resetGame}>{mistakes >= 6 ? 'Start Over' : 'Play Again'}</button>
        </div>
      }
    </div>
  )
}

export default Hangman
