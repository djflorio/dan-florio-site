// Third party
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navigation = (props) => {

  const { mainClass, linkClass, activeLinkClass } = props;

  return (
    <nav className={mainClass}>
      <NavLink
        to="/about"
        className={linkClass}
        activeClassName={activeLinkClass}>
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={linkClass}
        activeClassName={activeLinkClass}>
        Portfolio
      </NavLink>
      <NavLink
        to="/blog"
        className={linkClass}
        activeClassName={activeLinkClass}>
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={linkClass}
        activeClassName={activeLinkClass}>
        Contact
      </NavLink>
      <a
        href="http://www.danfloriomusic.com"
        className={linkClass}
        target="_blank">
        Music
      </a>
    </nav>
  );
  
}

Navigation.propTypes = {
  mainClass: PropTypes.string,
  linkClass: PropTypes.string,
  activeLinkClass: PropTypes.string
}

export default Navigation;