import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './guildhall-logo.svg';
import logo2 from './MWLimited_WEBHEADER_400x73px.png';

const NavBar = () => (
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
          <NavLink exact activeClassName="active" className="nav-link" to="/"> Home </NavLink>
          <NavLink activeClassName="active" className="nav-link" to="/voice"> Voice </NavLink>
        </div>
      </div>
    </div>
  </nav>
);


export default NavBar;
