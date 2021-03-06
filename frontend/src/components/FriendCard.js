import style from '../stylesheets/FriendList.module.css'
import {BiMoon, BiBrightness} from 'react-icons/bi'

/*
Each individual FriendCard component represents an individual friend of current user
*/
const FriendCard = ({id, name, img, onSelectFriend}) => {

    const onClick = () => {
        onSelectFriend(id);
    }
    
    //need to find way to crop long names to fit within card length
    //work on way to make FriendCard clickable
    //also make images work
    return (
        <div className = {style['friend-card']} onClick = {() => onClick()}>
            <div> <img src={img} /> </div>
            <p>{name}</p>
        </div>
    )
}

export default FriendCard