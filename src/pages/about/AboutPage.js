// Node modules
import React from 'react';

// Assets
import './AboutPage.css';


class AboutPage extends React.Component {
  render() {
    return (
      <div className="about">
        <p className="about__p">
          TL;DR: I'm a millenial who makes computers do things via code,
          with a strong focus on web development. My favorite things: Javascript,
          React, Python, Django, eating pasta.
        </p>
        <p className="about__p">
          The year was 2002. After saving up 1200 dollars through birthday
          gifts and lawn mowing, I bought myself my first laptop at the age of 12
          (mostly with the intention of playing video games). Fascinated with how
          things work, I saved up another 200 dollars to purchase 2 books on C++
          programming and the Visual C++ Compiler Software. While most of the
          information I received from said books slid directly over my tiny,
          teenage head, it solidified my desire to learn more.
        </p>
        <p className="about__p">
          Fast forward several years, and 
        </p>
      </div>
    );
  }
}

export default AboutPage;