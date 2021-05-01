import Button from './Button.js'
import style from '../stylesheets/HeaderBar.module.css'

const ButtonsLoggedOut = () => {
    return (
        <div className = {style['header-buttons']}>
            <Button text = 'Sign Up'></Button>
            <Button text = 'Log In'></Button>
        </div>
    )
}

const ButtonsLoggedIn = () => {
    return (
        <div className = {style['header-buttons']}>
            <Button text = 'Edit Profile'></Button>
        </div>
    )
}
export {ButtonsLoggedIn, ButtonsLoggedOut}