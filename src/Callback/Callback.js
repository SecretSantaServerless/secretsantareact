import React from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';

const Callback = () => (
  <Container>
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
  </Container>
);

export default Callback;
