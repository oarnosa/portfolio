import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.styles.scss';

const Social = () => (
  <div className="social">
    <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="lg" />
    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']} size="lg" />
    <FontAwesomeIcon className="icon" icon={['fab', 'instagram']} size="lg" />
    <FontAwesomeIcon className="icon" icon={['far', 'envelope']} size="lg" />
  </div>
);

export default Social;
