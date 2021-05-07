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
          {
            userContext.user === null &&
            <button>Login</button>
          }
          {
            userContext.user !== null &&
            <button>Log Out</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation
