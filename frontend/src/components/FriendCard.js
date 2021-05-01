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
            <div>{name}</div>
            <div>{online ? <BiBrightness color = '#58AA43'/> : <BiMoon color = '#4570DE'/>}</div>
        </div>
    )
}

export default FriendCard