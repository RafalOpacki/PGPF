import React from 'react';
import './howItWorksSection.css';
import { sections } from 'constants/sections';
import ImageComponent from 'components/Common/ImageComponent/ImageComponent';
import howItWorksImage from 'images/howItWorks-image.svg';
import HowItWorksSectionHeader from './HowItWorksSectionHeader/HowItWorksSectionHeader';

const HowItWorksSection = () => (
  <section id={sections.howItWorks} className="how-it-works-section__wrapper">
    <ImageComponent
      src={howItWorksImage}
      alt="how it works"
      className="how-it-works-section__image"
    />
    <HowItWorksSectionHeader />
  </section>
);

export default HowItWorksSection;
