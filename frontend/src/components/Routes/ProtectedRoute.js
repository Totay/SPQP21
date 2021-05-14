import {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserContext} from '../Context/UserContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const userContext = useContext(UserContext);
  return (
    <Route 
      {...rest}
      render={ props => {
        if(userContext.user != null){
          return <Component {...props}/>
        } else {
          return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        }
      }}
    />
  )
}

export default ProtectedRoute
