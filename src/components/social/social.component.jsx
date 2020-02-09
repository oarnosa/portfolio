import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.styles.scss';

const Social = () => (
  <div className='social'>
    <div className='social-info'>
      <FontAwesomeIcon
        className='icon'
        icon={['fab', 'github']}
        size='lg'
        onClick={() => window.open('https://github.com/oarnosa')}
      />
      <p className='url'>/oarnosa</p>
    </div>
    <div className='social-info'>
      <FontAwesomeIcon
        className='icon'
        icon={['fab', 'linkedin-in']}
        size='lg'
        onClick={() => window.open('https://linkedin.com/in/oarnosa')}
      />
      <p className='url'>/in/oarnosa/</p>
    </div>
    <div className='social-info'>
      <FontAwesomeIcon
        className='icon'
        icon={['fab', 'instagram']}
        size='lg'
        onClick={() => window.open('https://instagram.com/arno_lando')}
      />
      <p className='url'>/arno_lando</p>
    </div>
    <div className='social-info'>
      <FontAwesomeIcon
        className='icon'
        icon={['far', 'envelope']}
        size='lg'
        onClick={() => (window.location.href = 'mailto:oarnosa@gmail.com')}
      />
      <p className='url'>oarnosa@gmail.com</p>
    </div>
    <div className='vl'></div>
  </div>
);

export default Social;
