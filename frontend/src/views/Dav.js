/*
This is where I will showcase features I've made, so as to prevent merge issues!
*/
import HeaderBar from '../components/HeaderBar'

const Dav = () => {
    return (
        <div>
            <HeaderBar></HeaderBar>
            <h1>Dav's Page</h1>    
            4/29 -- I've created the HeaderBar component, as you'll see up above here!
            <br></br>The code is spread across the components/HeaderBar.js, components/HeaderBarButtons.js, and stylesheets/HeaderBar.css files.
            <br></br>It takes a prop boolean "loggedIn", that changes the info displayed by the header,
            depending on whether the user is logged in or not.
            <br></br>By default, loggedIn = false, resulting in the header you see above.
            <br></br>You can also set loggedIn = true, resulting in the below header.
            <HeaderBar loggedIn = {true}></HeaderBar>

            <br></br>Obviously, we've got to work out the UI kinks and the centering issues.
            <br></br>I've also created the Button component (components/Button.js), which I used for the buttons in the header bars here.
            <br></br> Currently, the buttons on this page are not functional. Take a look at Button.js and comment if the code needs any refactoring!
            <br></br>Also, the buttons don't look very good yet, because I haven't touched their css
        </div>
      )
}

export default Dav