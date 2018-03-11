import React, { Component } from 'react';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

class Logout extends Component {
  logout() {
    this.props.auth.logout();
  }

  render() {
    return (
      <Container>
        <Menu text>
          <Menu.Item header>Welcome</Menu.Item>
          <Menu.Item position="right">
            <Button basic onClick={this.logout.bind(this)}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

const Home = props => (
  <div>
    <Logout auth={props.auth} />
    <Container textAlign="center">
      <Segment vertical>
        <h1>Home</h1>
      </Segment>
    </Container>
  </div>
);

export default Home;
