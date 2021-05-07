import style from '../stylesheets/InterestList.module.css'

/*
Each individual InterestCard represents a single interest
*/
const InterestCard = (props) => {
    const name = props.name
    //leaving space here for more properties, potentially

    return (
        <div className = {style['interest-card']}>
            <p>{name}</p>
        </div>
    )
}

export default InterestCard