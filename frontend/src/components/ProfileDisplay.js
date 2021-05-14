import InterestList from './InterestList'
import FriendList from './FriendList'
import BioCard from './BioCard'
import style from '../stylesheets/ProfileDisplay.module.css'
import {UserContext} from '../components/Context/UserContext';
import {useContext} from 'react';

/*
gotta work on at what point the data comes from
*/
const ProfileDisplay = ({friends, onSelectFriend}) => {
    const userContext = useContext(UserContext);
    const interests = [
        {
            name:'painting'
        },
        {
            name:'waterboarding'
        },
        {
            name:':)'
        },
        {
            name:'smiling >:)'
        },
        {
            name:'crying <:_('
        },
        {
            name:'conniving :0'
        },
        {
            name:'curmedgeoning >:0'
        },
        {
            name:'cannoneering 00===  ooo'
        }
    ]

    const biography = 'Once upon a time, a little boy named Christopher Robin went into the woods, and out came a man. I am that man. Alas, my name is not Christopher Robin.'

    //should we refactor profile-header into separate component?
    return (
        <div className={style['profile-display']}>
            <div className={style['profile-header']}>
                <img src={friends[0].img}></img>
                <h2>{userContext.user.name}</h2>
            </div>
            <InterestList interests = {interests}/>
            <BioCard biography = {userContext.user.bio}/>
            <FriendList friends = {friends} onSelectFriend={onSelectFriend}/>
        </div>
    )
}

export default ProfileDisplay