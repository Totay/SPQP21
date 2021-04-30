import {ButtonsLoggedIn, ButtonsLoggedOut} from './HeaderBarButtons.js'
import style from '../stylesheets/HeaderBar.css'

const HeaderBar = ({loggedIn = false}) => {
    if(!loggedIn) {
        return (
            <div class = 'header-bar'>
                <h2>Sign up now!</h2>
                <ButtonsLoggedOut></ButtonsLoggedOut>
            </div>
        )
    }
    else {
        return (
            <div class = 'header-bar'>
                <h2>Welcome, __USERNAME__</h2>
                <ButtonsLoggedIn></ButtonsLoggedIn>
            </div>
        )
    } 
}

export default HeaderBar