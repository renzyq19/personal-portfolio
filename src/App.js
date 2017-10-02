import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Voice from './Voice';
import './App.css';

const name = 'Will de Renzy-Martin';
const links = [
  'Home',
  // 'Voice',
];

const App = () => (
  <div>
    <NavBar name={name} links={links} />
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/voice" component={Voice} /> */}
  </div>
);

export default App;
