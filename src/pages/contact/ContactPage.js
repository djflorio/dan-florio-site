// Node modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

// Assets
import './ContactPage.css';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


class ContactPage extends React.Component {
  render() {
    return (
      <Fade cascade right>
        <div className="contact">
          <h1 className="contact__header">Say Something</h1>
          <p className="contact__blurb">
            Whether it's a request for my coding services or a desire
            to tell me about your day, the best way to get in touch is
            to use your favorite email program and send your words to:
          </p>
          <FontAwesomeIcon className="contact__envelope" icon={faEnvelope} />
          <div className="contact__email">
            <h1 className="contact__address">dflo</h1>
            <FontAwesomeIcon className="contact__at" icon={faAt} />
            <h1 className="contact__address">danflorio.com</h1>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ContactPage;