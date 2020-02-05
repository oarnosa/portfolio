import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      Logo
    </Link>
    <div className="options">
      <Link className="option" to="/about">
        <span className="code">01.</span>
        <span className="text">About</span>
      </Link>
      <Link className="option" to="/projects">
        <span className="code">02.</span>
        <span className="text">Projects</span>
      </Link>
      <Link className="option" to="/contact">
        <span className="code">03.</span>
        <span className="text">Contact</span>
      </Link>
      <Button small>Resume</Button>
    </div>
  </div>
);

export default Header;
