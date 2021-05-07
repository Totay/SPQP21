import style from '../stylesheets/FriendList.module.css'
import FriendCard from './FriendCard'

/*
friends should be array-like of objects that represent friends
*/
const FriendList = ({friends}) => {
    //should we order FriendList, online friends at top, offline at bottom?
    return (
        <div className={style['friend-list-wrapper']}>
            <h2>Friends</h2>
            <div className = {style['friend-list']}>
                {
                    friends.map( friend => (<FriendCard {...friend} />) )
                }
            </div>
        </div>
    )
}

export default FriendList