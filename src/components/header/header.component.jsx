import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="brand__logo" to="/" aria-label="Orlando Arnosa Logo">
      <Logo />
    </Link>
    <div className="options">
      <Link className="options__option" to="/about">
        <span className="options__option__code">01.</span>About
      </Link>
      <Link className="options__option" to="/projects">
        <span className="options__option__code">02.</span>Projects
      </Link>
      <Link className="options__option" to="/contact">
        <span className="options__option__code">03.</span>Contact
      </Link>
      <Button small style={{ marginLeft: "15px" }}>
        Resume
      </Button>
    </div>
  </div>
);

export default Header;
