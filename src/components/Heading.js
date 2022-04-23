import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const Heading = () => {
  return (
    <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '0em 0em' }} vertical>
      <Container text>
        <Header as='h1' content='Historical Social Media' inverted style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, paddingTop: '1em' }} />
        <Header
          as='h2'
          content='Query Historical Social Media Data from Reddit &#38; Twitter'
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
      </Container>
    </Segment>
  );
};

export default Heading;