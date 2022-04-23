import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = () => (
  <Container text>
    <Header as="h2">The Team</Header>
    <p>
      This application was created by Aaron, Franklin, Colin, Dezerel, and
      Rafael.
    </p>
    <Header as="h2">The Project</Header>
    <p>
      This application was created as part of the group project for UTSA CS
      4243/5493 Large-Scale Data Management, Spring 2022.
    </p>
  </Container>
);

export default About;
