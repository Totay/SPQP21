import Button from './Button.js'

const ButtonsLoggedOut = () => {
    return (
        <div class = 'header-buttons'>
            <Button text = 'Sign Up'></Button>
            <Button text = 'Log In'></Button>
        </div>
    )
}

const ButtonsLoggedIn = () => {
    return (
        <div class = 'header-buttons'>
            <Button text = 'Edit Profile'></Button>
        </div>
    )
}
export {ButtonsLoggedIn, ButtonsLoggedOut}