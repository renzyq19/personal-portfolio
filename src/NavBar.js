import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './guildhall-logo.svg';
import logo2 from './MWLimited_WEBHEADER_400x73px.png';

const buildLinks = list => list.map(
  ((name) => {
    const lowerName = name.toLowerCase();
    return <NavLink activeClassName="active" className="nav-item nav-link" to={`/${lowerName}`} key={lowerName}>{name}</NavLink>;
  }));


const NavBar = props => (
  <nav className="navbar navbar-toggleable navbar-light navbar-fixed-top bg-faded">
    <button
      className="navbar-toggler navbar-toggler-right" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <NavLink className="navbar-brand" to="/">
      <img src={logo} width={75} height={75} alt="logo" />
      <img src={logo2} width={150} height={25} alt="logo" />
    </NavLink>
    <div className="container">
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
