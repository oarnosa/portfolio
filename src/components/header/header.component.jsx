import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link className="header__logo" aria-label="Header Logo" to="/">
            <Logo />
          </Link>
          <div className="header__options">
            <NavLink
              className="header__option"
              to="/about"
              activeStyle={{ color: "rgba(239, 241, 245, 1)" }}
            >
              <span className="header__option--special">01.</span>About
            </NavLink>
            <NavLink
              className="header__option"
              to="/projects"
              activeStyle={{ color: "rgba(239, 241, 245, 1)" }}
            >
              <span className="header__option--special">02.</span>Projects
            </NavLink>
            <NavLink
              className="header__option"
              to="/contact"
              activeStyle={{ color: "rgba(239, 241, 245, 1)" }}
            >
              <span className="header__option--special">03.</span>Contact
            </NavLink>
            <div className="header__button">
              <Button
                small
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
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <ScrollLink
            className="header__logo"
            aria-label="Header Logo"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Logo />
          </ScrollLink>
          <FontAwesomeIcon
            className="header__toggle"
            icon={["fas", "bars"]}
            size="2x"
            onClick={toggleMenu}
          />
        </MediaQuery>
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
