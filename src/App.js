import React from 'react';

const App = () => (
  <div id="main">
    <NavBar />
    <Main />
  </div>
);

const NavBar = () => (
  <nav className="navbar">
    <div className="container-fluid" />
  </nav>
);

const Main = () => (
  <div className="container">
    <div className="jumbotron">
      Main Section
    </div>
  </div>
);

export default App;
