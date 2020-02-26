import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./menu.styles.scss";

const Menu = () => (
  <div className="menu">
    <div className="menu__options">
      <ScrollLink
        className="menu__options__option"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        <span className="menu__options__option__code">01.</span> About
      </ScrollLink>
      <ScrollLink
        className="menu__options__option"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
      >
        <span className="menu__options__option__code">02.</span> Projects
      </ScrollLink>
      <ScrollLink
        className="menu__options__option"
        to="contact"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
      >
        <span className="menu__options__option__code">03.</span> Contact
      </ScrollLink>
    </div>
  </div>
);

export default Menu;
