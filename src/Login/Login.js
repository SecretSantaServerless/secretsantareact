import React, { Component } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

class Links extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <Container fluid={true}>
        <Menu secondary>
          <Menu.Item position="right">
            <Menu.Item>
              <Button basic onClick={this.login.bind(this)}>
                Log In
              </Button>
            </Menu.Item>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div>
        <Links auth={this.props.auth} />
        <Container textAlign="center">
          <h1>Login</h1>
        </Container>
      </div>
    );
  }
}

export default Login;
