import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const Nav = () => {

  return (
    <Segment>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item content='Historical Social Media'as={Link} to="/" header />
          <Menu.Item content='About' as={Link} to="/about" />
          <Menu.Item content='Data' as={Link} to="/data" />
        </Container>
      </Menu>
    </Segment>
  );
};

export default Nav;
