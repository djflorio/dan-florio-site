// Third party
import React from 'react';
import { NavLink } from 'react-router-dom';

// Assets
import './TopNav.css';
import avatar from '../img/avatar.png';

// Components
import Navigation from '../Navigation';


class TopNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: window.scrollY,
      mobileOpen: false
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        scrollTop: window.scrollY
      });
    }
  }

  render() {

    const shrinkNav = this.state.scrollTop > 80;
    const topNavClass = "top-nav" + (shrinkNav ? " top-nav--small" : "");

    if (this.props.match.url === "/") {
      return null;
    }

    return (
      <div className={topNavClass}>
        <NavLink to="/">
          <img className="top-nav__avatar" src={avatar} />
        </NavLink>
        <Navigation
          mainClass="top-nav__menu"
          linkClass="top-nav__link"
          activeLinkClass="top-nav__link--active"
        />
      </div>
    );
  }
}

export default TopNav;