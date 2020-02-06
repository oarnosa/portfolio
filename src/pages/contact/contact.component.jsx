import React from 'react';

import Button from '../../components/button/button.component';

import './contact.styles.scss';

const ContactPage = () => (
  <div className="contact-page">
    <p className="section">03. What's Next?</p>
    <h1 className="title">Get In Touch</h1>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
      molestiae! Debitis maxime minus nesciunt, natus facilis numquam, labore
      vel ea dicta tempora voluptates dolorum magni! Eveniet soluta architecto
      animi facilis!
    </p>
    <Button onClick={() => (window.location.href = 'mailto:oarnosa@gmail.com')}>
      Say Hello
    </Button>
  </div>
);

export default ContactPage;
