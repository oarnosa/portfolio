import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './showcase.styles.scss';

const Showcase = ({
  inverted,
  title,
  description,
  imageUrl,
  skills,
  githubUrl,
  serverUrl,
  previewUrl
}) => (
  <div className={`showcase ${inverted ? 'inverted' : ''}`}>
    <div
      className="showcase-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="showcase-info">
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <div className="skills">
        {skills.map(skill => (
          <span className="skill">{skill}</span>
        ))}
      </div>
      <div className="links">
        <FontAwesomeIcon
          className="link"
          icon={['fab', 'github']}
          size="lg"
          onClick={() => window.open(`${githubUrl}`)}
        />
        <FontAwesomeIcon
          className="link"
          icon={['fas', 'external-link-alt']}
          size="lg"
          onClick={() => window.open(`${previewUrl}`)}
        />
      </div>
    </div>
  </div>
);

export default Showcase;
