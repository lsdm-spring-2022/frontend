import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">
      <h1>Historical Social Media</h1>
    </Link>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
      <Link to="/data">Data</Link>
    </nav>
    <Outlet />
  </div>
);

export default Nav;
