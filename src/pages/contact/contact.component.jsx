import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../../components/button/button.component";

import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact" id="contact">
    <Fade>
      <div className="contact__heading">
        <p className="contact__kicker">03. What's Next?</p>
        <h1 className="contact__headline">Get In Touch</h1>
      </div>
      <div className="contact__content">
        <p className="contact__info">
          I am always open to new opportunities and meeting new people. If you
          want to build something together, discuss new opportunites, or even
          play some games, my inbox is always open. Feel free to reach out and
          I'll do my best to respond!
        </p>
      </div>
      <Button
        onClick={() => (window.location.href = "mailto:oarnosa@gmail.com")}
      >
        Say Hello
      </Button>
    </Fade>
  </div>
);

export default ContactPage;
