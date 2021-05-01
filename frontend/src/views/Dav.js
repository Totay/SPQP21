/*
This is where I will showcase features I've made, so as to prevent merge issues!
*/
import HeaderBar from '../components/HeaderBar'
import FriendList from '../components/FriendList'

// some images for testing purposes
//import smile_img from '../images/smile.png'
//import capture2_img from '../images/Capture2.PNG'


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
    }
] //array of FriendCard components, should be replaced with call to backend i suppose
//these fields are just temporary -- should define in backend

const Dav = () => {
    return (
        <div>
            <h1>Dav's Page</h1>    
            <hr></hr>

            <FriendList friends = {friends}></FriendList>
            <b>4/30</b> -- I've created the FriendList component, which is composed of FriendCard components!
            <br /> The code is spread across the components/FriendCard.js, components/FriendList.js, and stylesheets/FriendList.module.css files.
            <br /> I'll have to work on displaying the images (image is on left of name, not working right now)
            <br /> Also, I'm planning on making each Friend Card clickable, and perhaps it would open a popup on click or something.

            <div style = {{height:200}} />
            <HeaderBar></HeaderBar>
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