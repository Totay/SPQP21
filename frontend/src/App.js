import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import Pages / Views
import Home from './views/Home';
import Main from './views/Main';
import EditProfile from './views/EditProfile';
import ResetPassword from './views/ResetPassword';
import Dav from './views/Dav'

function App() {
  return (
    <Router>
      <div className="App"> NAVIGATION</div>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/main">
          <Main></Main>
        </Route>
        <Route exact path="/editprofile">
          <EditProfile></EditProfile>
        </Route>
        <Route exact path="/resetpassword">
          <ResetPassword></ResetPassword>
        </Route>
        <Route exact path="/dav">
          <Dav></Dav>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
