// Node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

// Assets
import './MobileNav.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import Navigation from '../Navigation';

const MobileNavLink = (props) => {

  const {path, name, menu} = props;
  const active = path === "/" ? "" : "mobile-nav__link--active";

  return (
    <NavLink
      to={path}
      className="mobile-nav__link"
      activeClassName={active}
      onClick={() => menu.setState({ open: false })}>
      {name}
    </NavLink>
  );
}


class MobileNav extends React.Component  {

  constructor(props) {
    super(props);

    this.onMobileClick = this.onMobileClick.bind(this);

    this.state = {
      open: false
    }
  }

  onMobileClick() {
    this.setState({ open: false });
  }

  render() {
    if (this.props.match.url === "/") {
      return null;
    }
    
    return (
      <div className="mobile-nav">
        <span
          className="mobile-nav__button"
          onClick={() => this.setState({ open: !this.state.open })}>
          <FontAwesomeIcon
            className="mobile-nav__bars"
            icon={this.state.open ? faTimes : faBars}
          />
          Menu
        </span>
        <Fade duration={500}>
          <div hidden={!this.state.open} className="mobile-nav__view">
            <Navigation
              mainClass="mobil-nav__links"
              linkClass="mobile-nav__link"
              activeLinkClass="mobile-nav__link--active"
              onMobileClick={this.onMobileClick}
            />
          </div>
        </Fade>
      </div>
    );
  }

  
}

export default MobileNav;