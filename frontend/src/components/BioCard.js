import style from '../stylesheets/BioCard.module.css'

const BioCard = (props) => {
    const biography = props.biography

    return (
        <div className={style['bio-card']}>
            <h2>Bio</h2>
            <p>{biography}</p>
        </div>
    )
}

export default BioCard