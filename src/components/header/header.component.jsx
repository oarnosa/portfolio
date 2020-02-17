import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../button/button.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => {
  // declare hooks
  const [open, setOpen] = useState(false);

  // event handlers
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <Link className="brand__logo" to="/" aria-label="Brand Logo">
        <Logo />
      </Link>
      <FontAwesomeIcon
        className="header__menu"
        icon={["fas", "bars"]}
        size="2x"
        onClick={toggleMenu}
      />
      <div className="header__options">
        <Link className="header__options__option" to="/about">
          <span className="header__options__option__code">01.</span>About
        </Link>
        <Link className="header__options__option" to="/projects">
          <span className="header__options__option__code">02.</span>Projects
        </Link>
        <Link className="header__options__option" to="/contact">
          <span className="header__options__option__code">03.</span>Contact
        </Link>
        <Button
          small
          style={{ marginLeft: "15px" }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1UO2qD8b0FMwuggKP3qBBtU2AsHCNGqKn/view"
            )
          }
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Header;
