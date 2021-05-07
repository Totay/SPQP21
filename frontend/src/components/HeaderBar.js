import {ButtonsLoggedIn, ButtonsLoggedOut} from './HeaderBarButtons.js'
import style from '../stylesheets/HeaderBar.module.css'

/*
replace loggedIn boolean with user object/token for backend
*/
const HeaderBar = (props) => {
    const loggedIn = props.loggedIn ? true : false //default value of loggedIn is false, if loggedIn is undefined
    const userName = 'cul_parson96' //temp name, replace this
    
    //console.log(JSON.stringify(props))
    //console.log(style)

    if(!loggedIn) {
        return (
            <div className = {style['header-bar']}>
                <h2>Sign up now!</h2>
                <ButtonsLoggedOut></ButtonsLoggedOut>
            </div>
        )
    }
    else {
        return (
            <div className = {style['header-bar']}>
                <h2>Welcome, {userName}</h2>
                <ButtonsLoggedIn></ButtonsLoggedIn>
            </div>
        )
    } 
}

export default HeaderBar