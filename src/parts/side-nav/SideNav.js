// Node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// Assets
import './SideNav.css';


const SideNav = (props) => {

  if (props.match.url === "/") {
    return null;
  }
  
  return (
    <Fade cascade left>
      <nav className="side-nav">
        <NavLink
          to="/"
          className="side-nav__link">
          <span className="side-nav__link-overlay">
            Home
          </span>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="side-nav__link"
          activeClassName="side-nav__link--active">
          <span className="side-nav__link-overlay">
            About
          </span>
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className="side-nav__link"
          activeClassName="side-nav__link--active">
          <span className="side-nav__link-overlay">
            Portfolio
          </span>
          Portfolio
        </NavLink>
        <a
          href="http://www.danfloriomusic.com"
          className="side-nav__link"
          target="_blank">
          <span className="side-nav__link-overlay">
            Music
          </span>
          Music
        </a>
      </nav>
    </Fade>
  );
};

export default SideNav;