import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <h1>Match Point</h1>
        </div>
        <div className="nav-items">
          <Link to="/">Home</Link>          
          <Link to="/editprofile">Edit Profile</Link>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
