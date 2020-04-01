import React from 'react';
import './howItWorksSection.css';
import { sections } from '../../constants/sections';
import ImageComponent from '../ImageComponent/ImageComponent';
import howItWorksImage from '../../images/howItWorks-image.svg';
import HowItWorksSectionHeader from './HowItWorksSectionHeader/HowItWorksSectionHeader';

const HowItWorksSection = () => {
  return (
    <section id={sections.howItWorks} className='how-it-works-section__wrapper'>
      <HowItWorksSectionHeader />
      <ImageComponent
        src={howItWorksImage}
        alt='how it works'
        className='how-it-works-section__image'
      />
    </section>
  );
};

export default HowItWorksSection;
