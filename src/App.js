// eslint no-unused-vars:false
import React from 'react';
import NavBar from './NavBar';

const App = () => (
  <div id="main">
    <NavBar />
    <Main />
  </div>
);


const Main = () => (
  <div className="container">
    <div className="jumbotron">
      Main Section
    </div>
  </div>
);

export default App;
