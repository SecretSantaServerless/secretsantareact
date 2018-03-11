import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { Button, Container, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Links = () => (
  <Container fluid={true}>
    <Menu secondary>
      <Menu.Item position="right">
        <Menu.Item>
          <Button basic as={Link} to="/">
            Log In
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button basic as={Link} to="/">
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  </Container>
);

const Logout = () => (
  <Container>
    <Menu text>
      <Menu.Item header>Welcome</Menu.Item>
      <Menu.Item position="right">
        <Button basic as={Link} to="/login">
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  </Container>
);

const Home = () => (
  <div>
    <Logout />
    <Container textAlign="center">
      <h1>Home</h1>
    </Container>
  </div>
);

const Login = () => (
  <div>
    <Links />
    <Container textAlign="center">
      <h1>Login</h1>
    </Container>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
