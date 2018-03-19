import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from '../Auth/Auth';
import history from '../history';
import { Login, Home, Callback } from '../components/container';

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};
const auth = new Auth();

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home auth={auth} {...props} />}
        />
        <Route
          path="/login"
          render={props => <Login auth={auth} {...props} />}
        />
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
  </Provider>
);

export default Routes;
