// Node modules
import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Assets
import './AboutPage.css';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import face from './img/face.jpg';


class AboutPage extends React.Component {
  render() {
    return (
      
      <div className="about">
        <div className="about__gears">
          <FontAwesomeIcon
            icon={faCog}
            className="about__gear about__gear--1"
          />
          <FontAwesomeIcon
            icon={faCog}
            className="about__gear about__gear--2"
          />
          <FontAwesomeIcon
            icon={faCog}
            className="about__gear about__gear--3"
          />
          <FontAwesomeIcon
            icon={faCog}
            className="about__gear about__gear--4"
          />
        </div>
        <img className="about__face" src={face} alt="face" />
        <Fade cascade right>
          <div>
            <h1 className="about__header">I Am...</h1>
            <p className="about__p">
              ...a millenial who knows how to talk to computers,
              especially when it comes to the web.
            </p>
            <p className="about__p">
              My favorite digital things: Javascript,
              React, Python, Django, Raspberry PI, Arduino, putting lightweight Linux distros
              on crappy computers, scary video games.
            </p>
            <p className="about__p">
              My favorite non-digital things:&nbsp;
              <a
                className="about__a"
                href="http://www.danfloriomusic.com"
                target="_blank"
                rel="noopener noreferrer">writing music</a>,
              running, biking, cooking food, eating food, accidentally writing "food"
              instead of "good" in text messages.
            </p>
          </div>
        </Fade>
      </div>
      
    );
  }
}

export default AboutPage;