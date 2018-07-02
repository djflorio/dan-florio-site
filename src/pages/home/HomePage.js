// Node modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

// Assets
import './HomePage.css';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import avatar from './img/avatar.png';
import Fade from 'react-reveal/Fade';


class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Fade top left>
          <div className="home__section home__section--1"> 
            <h1 className="home__title">
              dan florio
            </h1>

            <FontAwesomeIcon
              icon={faCog}
              className="home__cog home__cog--1"
            />
          </div>
        </Fade>
        <Fade top right>
          <div className="home__section home__section--2">
            <h2 className="home__slogan">
              developer music maker tinker thinker
            </h2>
            <FontAwesomeIcon
              icon={faCog}
              className="home__cog home__cog--2"
            />
          </div>
        </Fade>
        <Fade bottom left>
          <div className="home__section home__section--3">
            <Fade left cascade>
              <nav className="home__nav">
                <Link to="/about" className="home__nav-link">About</Link>
                <Link to="/blog" className="home__nav-link">Blog</Link>
                <Link to="/portfolio" className="home__nav-link">Portfolio</Link>
                <Link to="/resume" className="home__nav-link">Resume</Link>
              </nav>
            </Fade>
            <FontAwesomeIcon
              icon={faCog}
              className="home__cog home__cog--3"
            />
          </div>
        </Fade>
        <Fade bottom right>
          <div className="home__section home__section--4">
            <img className="home__avatar" src={avatar} alt="avatar" />
            <FontAwesomeIcon
              icon={faCog}
              className="home__cog home__cog--4"
            />
          </div>
        </Fade>
      </div>
    );
  }
}

export default HomePage;