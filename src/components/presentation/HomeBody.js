import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import AddWish from './AddWish';
import WishList from './WishList';

const HomeBody = () => (
  <Container textAlign="center">
    <Segment vertical>
      <h1>Wish List</h1>
      <AddWish />
      <WishList />
    </Segment>
  </Container>
);

export default HomeBody;
