import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import Slide from "react-reveal/Slide";
import Button from "../button/button.component";
import Menu from "../menu/menu.component";

import "./header.styles.scss";

const Header = () => {
  // declare hooks
  const [show, setShow] = useState(false);

  // event handlers
  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link className="brand__logo" to="/" aria-label="Brand Logo">
          <Logo />
        </Link>
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
        <FontAwesomeIcon
          className="header__toggle"
          icon={["fas", "bars"]}
          size="2x"
          onClick={toggleMenu}
        />
      </div>
      <Slide top when={show}>
        <Menu />
      </Slide>
    </div>
  );
};

export default Header;
