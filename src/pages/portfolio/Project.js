// Node modules
import React from 'react';

// Assets
import './Project.css';


const Project = (props) => {

  const {
    title, description, screenshot, technology, url, code
  } = props.project.acf;

  return (
    <li className="project">
      <div className="project__img-container">
        <img className="project__img" src={screenshot} alt={title} />
      </div>
      <h2 className="project__title">{title}</h2>
      <p className="project__description">
        {description}
      </p>
      <p className="project__technology">
        <b>Made with:</b> {technology}
      </p>
      {
        url &&
        <a
          className="project__link"
          href={url}
          target="_blank">
          View Project
        </a>
      }
      {
        code &&
        <a
          className="project__link"
          href={code}
          target="_blank">
          Explore Code
        </a>
      }
    </li>
  );
}

export default Project;