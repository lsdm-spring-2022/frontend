import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Data from './pages/Data';

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='data' element={<Data />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
