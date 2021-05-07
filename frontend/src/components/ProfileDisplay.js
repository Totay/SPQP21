import InterestList from './InterestList'
import FriendList from './FriendList'
import BioCard from './BioCard'
import style from '../stylesheets/ProfileDisplay.module.css'



/*
gotta work on at what point the data comes from
*/
const ProfileDisplay = ({friend}) => {
    const friends = [
        {
            name:'marker_greene22',
            icon:'none',
            status:'online',
            online: true
        },
        {
            name:'jaime_hime42',
            icon:'none',
            status:'offline',
            online: false
        },
        {
            name:'roger_rogerRR',
            icon:'none',
            status:'offline',
            online:false
        },
        {
            name:'mr_smark',
            icon:'none',
            status:'online',
            online:true
        },
        {
            name:'mrs_smark',
            icon:'none',
            status:'offline',
            online:false
        },
        {
            name:'chancellor_otto_von_bismarck1815',
            icon:'none',
            status:'offline',
            online:false
        },
    ] //array of FriendCard components, should be replaced with call to backend i suppose
    //these fields are just temporary -- should define in backend
    
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
                <img src={friend.img}></img>
                <h2>Donkus McBonkus</h2>
            </div>
            <InterestList interests = {interests}/>
            <BioCard biography = {biography}/>
            <FriendList friends = {friends}/>
        </div>
    )
}

export default ProfileDisplay