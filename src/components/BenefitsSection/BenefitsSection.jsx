import React from 'react';
import BenefitsSectionHeader from './BenefitsSectionHeader/BenefitsSectionHeader';
import BenefitsSectionCard from './BenefitsSectionCard/BenefitsSectionCard';
import { benefitsItems } from './const';
import { sections } from '../../constants/sections';
import './benefitsSection.css';

const BenefitsSection = () => (
  <section id={sections.benefits} className='benefits-section__wrapper'>
    <BenefitsSectionHeader />
    <div className='benefits-section__list'>
      {benefitsItems.map((item) => (
        <BenefitsSectionCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default BenefitsSection;
