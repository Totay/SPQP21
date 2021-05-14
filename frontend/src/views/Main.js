// import dependencies
import {useState, useContext} from 'react'
import {UserContext} from '../components/Context/UserContext'

// import components
import Chat from '../components/Chat';
import Games from '../components/Games';
import Decision from '../components/Decision';
import ProfileDisplay from '../components/ProfileDisplay';

const Main = () => {
  const userContext = useContext(UserContext)

  const [friends, setFriends] = useState([
    {
      id: 2,
      name: 'Jane Doe',
      img: 'https://styles.redditmedia.com/t5_2r444/styles/communityIcon_7prxpryije661.jpg?width=256&s=b8adb2c3647bd08d3f778ef9a4f8e8a8fab733f3'
    },
    {
      id: 3,
      name: 'Robert Bay',
      img: 'https://styles.redditmedia.com/t5_2r444/styles/communityIcon_7prxpryije661.jpg?width=256&s=b8adb2c3647bd08d3f778ef9a4f8e8a8fab733f3'
    },
    {
      id: 4,
      name: 'Jennifer Osman',
      img: 'https://styles.redditmedia.com/t5_2r444/styles/communityIcon_7prxpryije661.jpg?width=256&s=b8adb2c3647bd08d3f778ef9a4f8e8a8fab733f3'
    },
  ])

  const [showDecision, setShowDecision] = useState(false);
  const [currentFriend, setCurrentFriend] = useState();


  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr 1fr',
    gap: '20px',
    width: '90%',
    margin: 'auto',
    position: 'fixed',
    height: '90%',
    bottom: '0',
    left: '5%',
    padding: '0',
  }

  const onMadeDecision = () => {
    setShowDecision(false);
  }

  const onFinishedGame = () => {
    setShowDecision(true);
  }

  const onSelectFriend = (id) => {
    const desiredFriend = friends.filter((friend) => friend.id == id);
    console.log(desiredFriend[0]);
    setCurrentFriend(desiredFriend[0]);
  }

  return (
    <main style={mainStyle}>
      <ProfileDisplay friends={friends} onSelectFriend={onSelectFriend}></ProfileDisplay>
      {
        currentFriend != null &&
        <Chat friend={currentFriend}></Chat>
      }
      {
        currentFriend != null &&
        <Games onFinishedGame={onFinishedGame} friend={currentFriend}></Games>
      }
      {
        showDecision &&
        <Decision friend={currentFriend} onMadeDecision={onMadeDecision}></Decision>
      }
    </main>
  )
}

export default Main
