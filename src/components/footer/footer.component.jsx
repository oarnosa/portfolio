import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <p className="footer__info">
      &copy; 2020 Orlando Arnosa. All Rights Reserved.
    </p>
    <p className="footer__info">
      Email:{" "}
      <span
        className="footer__info__special"
        onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
      >
        oarnosa@gmail.com
      </span>
    </p>
  </div>
);

export default Footer;
