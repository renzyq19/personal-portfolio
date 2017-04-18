import React from 'react';
import PropTypes from 'prop-types';
import logo from './guildhall-logo.svg';

const buildLinks = list => list.map(
  (name, i) => (i === 0 ?
    <a className="nav-item nav-link active" href={`#${name}`} key={name}>
      {name} <span className="sr-only">(current)</span>
    </a>
  :
    <a className="nav-item nav-link" href={`#${name}`} key={name}>{name}</a>
  ));


const NavBar = props => (
  <nav className="navbar navbar-toggleable navbar-light navbar-fixed-top bg-faded">
    <div className="container">
      <button
        className="navbar-toggler navbar-toggler-right" type="button"
        data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#about">
        <img src={logo} width={75} height={75} alt="logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {buildLinks(props.links)}
        </div>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
