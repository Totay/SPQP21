import style from '../stylesheets/InterestList.module.css'
import InterestCard from './InterestCard'
/*
interests should be array-like of objects that represent interests
*/
const InterestList = ({interests}) => {
    //should there be ordering method for interests, mutual interests first?
    return (
        <div>
            <div className = {style['interest-list']}>
                {
                    interests.map( i => (<InterestCard {...i} />) )
                }
            </div>
        </div>
    )
}

export default InterestList