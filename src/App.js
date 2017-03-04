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
      <Section sectionName="about" />
      <Section sectionName="portfolio" />
      <Section sectionName="contact" />
    </div>
  </div>
);

const Section = props => (
  <div className="card" height={100} >
    <a id={props.sectionName} >
      {props.sectionName}
    </a>
  </div>
);

Section.propTypes = {
  sectionName: React.PropTypes.string,
};

export default App;
