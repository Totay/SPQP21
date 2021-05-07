import style from '../stylesheets/FriendList.module.css'
import {BiMoon, BiBrightness} from 'react-icons/bi'

/*
Each individual FriendCard component represents an individual friend of current user
*/
const FriendCard = (props) => {
    const name = props.name
    const icon = props.icon
    const status = props.status
    const online = props.online

    const onClick = () => {console.log('pressed')}
    
    //need to find way to crop long names to fit within card length
    //work on way to make FriendCard clickable
    //also make images work
    return (
        <div className = {style['friend-card']} onClick = {onClick}>
            <div> <img src = {icon} /> </div>
            <p>{name}</p>
        </div>
    )
}

export default FriendCard