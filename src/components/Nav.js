import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('Historical Social Media');

  const handleItemClick = (e, data) => {
    setActiveItem(data.content);
  };

  return (
    <Segment>
      <Menu pointing secondary>
        <Menu.Item content='Historical Social Media' as={Link} active={activeItem === 'Historical Social Media'} onClick={handleItemClick} to="/" />
        <Menu.Item content='About' as={Link} active={activeItem === 'About'} onClick={handleItemClick} to="/about" />
        <Menu.Item content='Data' as={Link} active={activeItem === 'Data'} onClick={handleItemClick} to="/data" />
      </Menu>
    </Segment>
  );
};

export default Nav;
