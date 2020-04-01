import React from 'react';
import './benefitsSection.css';
import BenefitsSectionHeader from './BenefitsSectionHeader/BenefitsSectionHeader';
import BenefitsSectionCard from './BenefitsSectionCard/BenefitsSectionCard';
import { benefitsItems } from './const';
import { sections } from '../../constants/sections';

const BenefitsSection = () => {
  return (
    <section id={sections.benefits} className='benefits-section__wrapper'>
      <BenefitsSectionHeader />
      <div className='benefits-section__list'>
        {benefitsItems.map((item, index) => {
          return <BenefitsSectionCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
