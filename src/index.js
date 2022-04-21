import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './routes/Home';
import About from './routes/About';
import Data from './routes/Data';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="ui container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="data" element={<Data />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.querySelector('#root')
);
