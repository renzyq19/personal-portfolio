import React from 'react';
import logo from './guildhall-logo.svg';

const NavBar = () => (
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
          <a className="nav-item nav-link active" href="#home">
            Home <span className="sr-only">(current)</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Dump = () => (
  <div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#about">
          About <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#news">News</a>
        <a className="nav-item nav-link" href="#images">Images</a>
        <a className="nav-item nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </div>
);

export default NavBar;
