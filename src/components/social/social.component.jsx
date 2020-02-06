import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.styles.scss';

const Social = () => (
  <div className="social">
    <FontAwesomeIcon
      className="icon"
      icon={['fab', 'github']}
      size="lg"
      onClick={() => window.open('https://github.com/oarnosa')}
    />
    <FontAwesomeIcon
      className="icon"
      icon={['fab', 'linkedin-in']}
      size="lg"
      onClick={() => window.open('https://linkedin.com/in/oarnosa')}
    />
    <FontAwesomeIcon
      className="icon"
      icon={['fab', 'instagram']}
      size="lg"
      onClick={() => window.open('https://instagram.com/arno_lando')}
    />
    <FontAwesomeIcon
      className="icon"
      icon={['far', 'envelope']}
      size="lg"
      onClick={() => (window.location.href = 'mailto:oarnosa@gmail.com')}
    />
    <div className="vl"></div>
  </div>
);

export default Social;
