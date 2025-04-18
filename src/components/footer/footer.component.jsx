import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MediaQuery from "react-responsive";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <MediaQuery maxWidth={1250}>
      <div className="footer__icons">
        <FontAwesomeIcon
          className="footer__icon"
          icon={["fab", "github"]}
          size="2x"
          onClick={() => window.open("https://github.com/oarnosa")}
        />
        <FontAwesomeIcon
          className="footer__icon"
          icon={["fab", "linkedin-in"]}
          size="2x"
          onClick={() => window.open("https://www.linkedin.com/in/oarnosa")}
        />
        <FontAwesomeIcon
          className="footer__icon"
          icon={["far", "envelope"]}
          size="2x"
          onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
        />
      </div>
    </MediaQuery>
    <p className="footer__info">&copy; 2025 Orlando Arnosa. Rights Reserved.</p>
    <p className="footer__info">
      Email:{" "}
      <span
        className="footer__info--special"
        onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
      >
        oarnosa@gmail.com
      </span>
    </p>
  </div>
);

export default Footer;
