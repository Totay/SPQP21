import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../components/Context/UserContext';

const Navigation = () => {
  const userContext = useContext(UserContext);
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <h1>Match Point</h1>
        </div>
        <div className="nav-items">
          <Link to="/">Home</Link>          
          <Link to="/editprofile">Edit Profile</Link>
          <Link to="/main">Main</Link>          
          <button onClick={() => {userContext.setUser({
            id: 2,
            name: 'Jane Doe',
            email: 'jdoe@gmail.com',
            age: 26,
            bio: "klj kasjfio io9a09 yh oiashhi9w  as fhoi iqhi a sf yho h iohiosadfhh aisioh asi ihwhihgpasdfh i awfio hioas df",
          })}}>Jane Doe</button>
          <button onClick={() => {userContext.setUser({
            id: 3,
            name: 'Robert Bay',
            email: 'rbay@gmail.com',
            age: 42,
            bio: "klj kasjfio io9a09 yh oiashhi9w  as fhoi iqhi a sf yho h iohiosadfhh aisioh asi ihwhihgpasdfh i awfio hioas df",
          })}}>Robert Bay</button>
          <button onClick={() => {userContext.setUser({
            id: 4,
            name: 'Jennifer Osman',
            email: 'josman@gmail.com',
            age: 19,
            bio: "klj kasjfio io9a09 yh oiashhi9w  as fhoi iqhi a sf yho h iohiosadfhh aisioh asi ihwhihgpasdfh i awfio hioas df",
          })}}>Jennifer Osman</button>
          {
            userContext.user == null &&
            <button>Login</button>
          }
          {
            userContext.user != null &&
            <button>Log Out</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation
