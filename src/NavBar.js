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
          <a className="nav-item nav-link active" href="#about">
            About <span className="sr-only">(current)</span>
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
        <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
        <a className="nav-item nav-link" href="#contact">Contact</a>
      </div>
      <div className="navbar-nav ml-auto">
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle" href="#dropdown"
            id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
          >
            Section
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#acting">Acting</a>
            <a className="dropdown-item" href="#tutoring">Tutoring</a>
            <a className="dropdown-item" href="#webdesign">Web Design</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
