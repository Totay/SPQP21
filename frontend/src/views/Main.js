// import dependencies
import {useState, useContext} from 'react'
import {UserContext} from '../components/Context/UserContext'

// import components
import Chat from '../components/Chat';
import Games from '../components/Games';
import Decision from '../components/Decision';

const Main = () => {
  const userContext = useContext(UserContext)
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 1,
      message: "Hello World"
    },
    {
      id: 2,
      from: 2,
      message: "My name is not world"
    },
    {
      id: 3,
      from: 2,
      message: "it's jeff"
    },
  ]);

  const [friend, setFriend] = useState({
    id: 2,
    name: 'Jane Doe',
    img: 'https://styles.redditmedia.com/t5_2r444/styles/communityIcon_7prxpryije661.jpg?width=256&s=b8adb2c3647bd08d3f778ef9a4f8e8a8fab733f3'
  })

  const [showDecision, setShowDecision] = useState(false);

  const onSend = (message) => {
    setMessages([{id: messages[messages.length - 1].id + 1, from: 1, message: message}, ...messages]);
  }

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr 1fr',
    gap: '20px',
    width: '90%',
    margin: 'auto',
    position: 'fixed',
    bottom: '0',
    left: '5%',
  }

  const onMadeDecision = () => {
    setShowDecision(false);
  }

  const onFinishedGame = () => {
    setShowDecision(true);
  }

  return (
    <main style={mainStyle}>
      <h1>left menu here</h1>
      <Chat messages={messages} friend={friend} onSend={onSend}></Chat>
      <Games onFinishedGame={onFinishedGame} friend={friend}></Games>
      {
        showDecision &&
        <Decision friend={friend} onMadeDecision={onMadeDecision}></Decision>
      }
    </main>
  )
}

export default Main
