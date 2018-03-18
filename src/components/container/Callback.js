import React from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';

export const Callback = () => (
  <Container>
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
  </Container>
);
