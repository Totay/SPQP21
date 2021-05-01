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
    
    //need to find way to crop long names to fit within card length
    return (
        <div className = {style['friend-card']} onClick = {() => {console.log('pressed')} }>
            <div> <img src = {icon} /> </div>
            <div>{name}</div>
            <div>{online ? <BiBrightness color = '#58AA43'/> : <BiMoon color = '#4570DE'/>}</div>
        </div>
    )
}

export default FriendCard