import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./menu.styles.scss";

const Menu = () => (
  <div className="menu">
    <ScrollLink
      className="menu__option"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
    >
      <span className="menu__option--special">01.</span> About
    </ScrollLink>
    <ScrollLink
      className="menu__option"
      to="projects"
      spy={true}
      smooth={true}
      duration={500}
    >
      <span className="menu__option--special">02.</span> Projects
    </ScrollLink>
    <ScrollLink
      className="menu__option"
      to="contact"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <span className="menu__option--special">03.</span> Contact
    </ScrollLink>
  </div>
);

export default Menu;
