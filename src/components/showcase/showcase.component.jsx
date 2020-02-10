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
  <div className='showcase'>
    <div className='showcase-image'>
      <img src={imageUrl} alt='' />
    </div>
    <div className='showcase-info'>
      <p className='featured'>Featured Project</p>
      <h2 className='title'>{title}</h2>
      <div className='description'>{description}</div>
      <div className='skills'>
        {skills.map((skill, index) => (
          <span key={index} className='skill'>
            {skill}
          </span>
        ))}
      </div>
      <div className='links'>
        <FontAwesomeIcon
          className='link'
          icon={['fab', 'github']}
          size='lg'
          onClick={() => window.open(`${githubUrl}`)}
        />
        {serverUrl !== '' && (
          <FontAwesomeIcon
            className='link'
            icon={['fas', 'server']}
            size='lg'
            onClick={() => window.open(`${serverUrl}`)}
          />
        )}
        <FontAwesomeIcon
          className='link'
          icon={['fas', 'external-link-alt']}
          size='lg'
          onClick={() => window.open(`${previewUrl}`)}
        />
      </div>
    </div>
  </div>
);

export default Showcase;
