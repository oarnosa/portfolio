import React from 'react';

import './about.styles.scss';

const AboutPage = () => (
  <div className='page--about'>
    <div className='heading'>
      <p className='heading__tag'>01. About</p>
      <h1 className='heading__main'>Get to Know Me</h1>
    </div>
    <section className='about'>
      <div className='about__info'>
        <p className='about__info__text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut saepe
          perspiciatis tenetur optio excepturi accusamus sapiente est minima
          explicabo voluptas, dolorum dolore, exercitationem blanditiis
          expedita, ex ad eum ducimus? Itaque.
        </p>
        <ul className='about__info__skillset'>
          <li className='about__info__skillset__skill'>Javascript (ES6+)</li>
          <li className='about__info__skillset__skill'>HTML & (S)CSS</li>
          <li className='about__info__skillset__skill'>React</li>
          <li className='about__info__skillset__skill'>GraphQL</li>
          <li className='about__info__skillset__skill'>Redux</li>
          <li className='about__info__skillset__skill'>PostgreSQL</li>
          <li className='about__info__skillset__skill'>Node.js</li>
          <li className='about__info__skillset__skill'>MongoDB</li>
          <li className='about__info__skillset__skill'>Express</li>
        </ul>
      </div>
      <img
        className='about__image'
        src='https://i.ibb.co/JzTLtGV/headshot-square.jpg'
        alt=''
      />
    </section>
  </div>
);

export default AboutPage;
