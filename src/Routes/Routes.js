import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import Home from '../Home/Home';
import history from '../history';
import Callback from '../Callback/Callback';

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
const auth = new Auth();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={props => <Home auth={auth} {...props} />} />
      <Route path="/login" render={props => <Login auth={auth} {...props} />} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
