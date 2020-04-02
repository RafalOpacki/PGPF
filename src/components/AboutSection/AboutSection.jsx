import React from 'react';
import { FormattedMessage } from 'react-intl';
import { sections } from '../../constants/sections';
import messages from './messages';
import { aboutSectionItems } from './const';
import './aboutSection.css';

const AboutSection = () => {
  return (
    <section id={sections.about} className='about-section__wrapper'>
      <h2 className='about-section__header'>
        <FormattedMessage {...messages.title} />
      </h2>
      {aboutSectionItems.map((item) => (
        <p className='about-section__text'>
          <FormattedMessage {...messages[item]} />
        </p>
      ))}
    </section>
  );
};

export default AboutSection;
