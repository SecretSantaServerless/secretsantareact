import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const Header = ({ action, label, title }) => (
  <Container>
    <Menu text>
      <Menu.Item header>{title}</Menu.Item>
      <Menu.Item position="right">
        <Button basic onClick={action}>
          {label}
        </Button>
      </Menu.Item>
    </Menu>
  </Container>
);

export default Header;
