import React from "react";

import "./button.styles.scss";

const Button = ({ children, small, ...otherProps }) => (
  <button className={`button ${small ? "small" : ""}`} {...otherProps}>
    {children}
  </button>
);

export default Button;
