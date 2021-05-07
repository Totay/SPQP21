import style from '../stylesheets/InterestList.module.css'

/*
Each individual InterestCard represents a single interest
*/
const InterestCard = (props) => {
    const name = props.name
    //leaving space here for more properties, potentially

    return (
        <div className = {style['interest-card']}>
            <div>{name}</div>
        </div>
    )
}

export default InterestCard