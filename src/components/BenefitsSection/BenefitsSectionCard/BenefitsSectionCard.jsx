import React from 'react';
import PropTypes from 'prop-types';
import './benefitsSectionCard.css';

const BenefitsSectionCard = ({ title, content }) => {
  return (
    <div className='benefits-card__wrapper'>
      <h3 className='benefits-card__title'>{title}</h3>
      <p className='benefits-card__content'>{content}</p>
    </div>
  );
};

BenefitsSectionCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default BenefitsSectionCard;
