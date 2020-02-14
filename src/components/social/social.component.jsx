import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./social.styles.scss";

const Social = () => (
  <div className="social">
    <div className="social__content">
      <FontAwesomeIcon
        className="social__icon"
        icon={["fab", "github"]}
        size="lg"
        onClick={() => window.open("https://github.com/oarnosa")}
      />
      <p className="social__url">/oarnosa</p>
    </div>
    <div className="social__content">
      <FontAwesomeIcon
        className="social__icon"
        icon={["fab", "linkedin-in"]}
        size="lg"
        onClick={() => window.open("https://linkedin.com/in/oarnosa")}
      />
      <p className="social__url">/in/oarnosa/</p>
    </div>
    <div className="social__content">
      <FontAwesomeIcon
        className="social__icon"
        icon={["fab", "instagram"]}
        size="lg"
        onClick={() => window.open("https://instagram.com/arno_lando")}
      />
      <p className="social__url">@arno_lando</p>
    </div>
    <div className="social__content">
      <FontAwesomeIcon
        className="social__icon"
        icon={["far", "envelope"]}
        size="lg"
        onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
      />
      <p className="social__url">oarnosa@gmail.com</p>
    </div>
    <div className="social__decoration"></div>
  </div>
);

export default Social;
