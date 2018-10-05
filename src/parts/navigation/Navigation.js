// Third party
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navigation = (props) => {

  const { mainClass, linkClass, activeLinkClass } = props;

  const onMobileClick = props.onMobileClick ? props.onMobileClick : null;

  return (
    <nav className={mainClass}>
      <NavLink
        to="/about"
        className={linkClass}
        activeClassName={activeLinkClass}
        onClick={onMobileClick}>
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={linkClass}
        activeClassName={activeLinkClass}
        onClick={onMobileClick}>
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={linkClass}
        activeClassName={activeLinkClass}
        onClick={onMobileClick}>
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
  activeLinkClass: PropTypes.string,
  onMobileClick: PropTypes.func
}

export default Navigation;