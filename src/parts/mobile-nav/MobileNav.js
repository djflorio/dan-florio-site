// Node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

// Assets
import './MobileNav.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MobileNavLink = (props) => {

  const {path, name, menu} = props;
  const active = path === "/" ? "" : "mobile-nav__link--active";

  return (
    <NavLink
      to={path}
      className="mobile-nav__link"
      activeClassName={active}
      onClick={() => menu.setState({ open: false })}>
      <span className="mobile-nav__link-overlay">
        {name}
      </span>
      {name}
    </NavLink>
  );
}


class MobileNav extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
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
          <nav hidden={!this.state.open} className="mobile-nav__view">
            <MobileNavLink path="/" name="Home" menu={this} />
            <MobileNavLink path="/about" name="About" menu={this} />
            <MobileNavLink path="/portfolio" name="Portfolio" menu={this} />
            <MobileNavLink path="/contact" name="Contact" menu={this} />
            <a
              href="http://www.danfloriomusic.com"
              className="mobile-nav__link"
              target="_blank">
              <span className="mobile-nav__link-overlay">
                Music
              </span>
              Music
            </a>
          </nav>
        </Fade>
      </div>
    );
  }

  
}

export default MobileNav;