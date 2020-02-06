import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './showcase.styles.scss';

const Showcase = () => (
  <div className="showcase">
    <div className="showcase-image">
      <div className="thumbnail">thumbnail</div>
    </div>
    <div className="showcase-info">
      <h2 className="title">title</h2>
      <div className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nihil
        in adipisci accusamus obcaecati est?
      </div>
      <div className="skills">
        <span className="skill">skill 1 </span>
        <span className="skill">skill 2 </span>
        <span className="skill">skill 3 </span>
      </div>
      <div className="links">
        <FontAwesomeIcon className="link" icon={['fab', 'github']} size="lg" />
        <FontAwesomeIcon
          className="link"
          icon={['fas', 'external-link-alt']}
          size="lg"
        />
      </div>
    </div>
  </div>
);

export default Showcase;
