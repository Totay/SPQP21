import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

// Import Pages / Views
import Home from './views/Home';
import Main from './views/Main';
import EditProfile from './views/EditProfile';
import ResetPassword from './views/ResetPassword';
import Dav from './views/Dav'

// Import components
import Navigation from './components/Navigation';
import ProtectedRoute from './components/Routes/ProtectedRoute';

// Import Context
import {UserContext} from './components/Context/UserContext';

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={{user, setUser}}>
          <Navigation></Navigation>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <ProtectedRoute exact path="/main" component={Main}/>
          <ProtectedRoute exact path="/editprofile" component={EditProfile}/>
          <Route exact path="/resetpassword">
            <ResetPassword></ResetPassword>
          </Route>
          <Route exact path="/dav">
            <Dav></Dav>
          </Route>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
