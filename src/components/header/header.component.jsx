import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import MediaQuery from "react-responsive";
import Slide from "react-reveal/Slide";
import Button from "../button/button.component";
import Menu from "../menu/menu.component";

import "./header.styles.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
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
                    "https://drive.google.com/file/d/1CUVP3alYcbAxBo-Nygbiw9V-0ZRFI5ES/view"
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
        <Slide top when={open}>
          <Menu setOpen={setOpen} />
        </Slide>
      </MediaQuery>
    </div>
  );
};

export default Header;
