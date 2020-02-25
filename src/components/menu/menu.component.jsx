import React from "react";

import Button from "../button/button.component";

import "./menu.styles.scss";

const Menu = ({ show }) => (
  <div className={`menu${show ? "" : "--hide"}`}>
    <div className="menu__options">
      <p className="menu__options__option">
        <span className="menu__options__option__code">01.</span> About
      </p>
      <p className="menu__options__option">
        <span className="menu__options__option__code">02.</span> Projects
      </p>
      <p className="menu__options__option">
        <span className="menu__options__option__code">03.</span> Contact
      </p>
    </div>
    <div className="menu__button">
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
);

export default Menu;
