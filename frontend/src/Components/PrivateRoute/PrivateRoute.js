import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext';

const PrivateRoute = (props) => {
    const { auth } = useContext(AuthContext)
    return auth.isAuthenticated ? (
        <Route path={props.path} exact={props.exact} component={props.component} />
      ) : (
        <Redirect to="/login" />
      );
}

export default PrivateRoute
