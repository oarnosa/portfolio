import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to='/about'>
        <span className='code'>01.</span>About
      </Link>
      <Link className='option' to='/projects'>
        <span className='code'>02.</span>Projects
      </Link>
      <Link className='option' to='/contact'>
        <span className='code'>03.</span>Contact
      </Link>
      <Button small style={{ marginLeft: '10px' }}>
        Resume
      </Button>
    </div>
  </div>
);

export default Header;
