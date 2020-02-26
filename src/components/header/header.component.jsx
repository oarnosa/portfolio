import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import Slide from "react-reveal/Slide";
import MediaQuery from "react-responsive";
import Button from "../button/button.component";
import Menu from "../menu/menu.component";

import "./header.styles.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="header">
      <div className="header__container">
        <MediaQuery minWidth={951}>
          <Link className="brand__logo" aria-label="Brand Logo" to="/">
            <Logo />
          </Link>
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <ScrollLink
            className="brand__logo"
            aria-label="Brand Logo"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Logo />
          </ScrollLink>
        </MediaQuery>
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
      <MediaQuery maxWidth={950}>
        <Slide top when={show}>
          <Menu />
        </Slide>
      </MediaQuery>
    </div>
  );
};

export default Header;
