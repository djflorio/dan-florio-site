// Node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// Assets
import './SideNav.css';
import avatar from './img/avatar.png';


const SideNav = (props) => {

  if (props.match.url === "/") {
    return null;
  }
  
  return (
    <Fade cascade left>
      <nav className="side-nav">
        <NavLink to="/" className="side-nav__logo">
          <img className="side-nav__logo-img" src={avatar} />
          <span className="side-nav__logo-overlay"></span>
        </NavLink>
        <NavLink
          to="/about"
          className="side-nav__link"
          activeClassName="side-nav__link--active">
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className="side-nav__link"
          activeClassName="side-nav__link--active">
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className="side-nav__link"
          activeClassName="side-nav__link--active">
          Contact
        </NavLink>
        <a
          href="http://www.danfloriomusic.com"
          className="side-nav__link"
          target="_blank">
          Music
        </a>
      </nav>
    </Fade>
  );
};

export default SideNav;