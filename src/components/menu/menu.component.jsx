import React from "react";

import "./menu.styles.scss";

const Menu = () => (
  <div className="menu">
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
  </div>
);

export default Menu;
