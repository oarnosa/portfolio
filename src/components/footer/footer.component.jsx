import React from "react";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <MediaQuery maxWidth={950}>
      <div className="footer__icons">
        <FontAwesomeIcon
          className="footer__icons__icon"
          icon={["fab", "github"]}
          size="2x"
          onClick={() => window.open("https://github.com/oarnosa")}
        />
        <FontAwesomeIcon
          className="footer__icons__icon"
          icon={["fab", "linkedin-in"]}
          size="2x"
          onClick={() => window.open("https://www.linkedin.com/in/oarnosa")}
        />
        <FontAwesomeIcon
          className="footer__icons__icon"
          icon={["fab", "instagram"]}
          size="2x"
          onClick={() => window.open("https://instagram.com/arno_lando")}
        />
        <FontAwesomeIcon
          className="footer__icons__icon"
          icon={["far", "envelope"]}
          size="2x"
          onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
        />
      </div>
    </MediaQuery>
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
