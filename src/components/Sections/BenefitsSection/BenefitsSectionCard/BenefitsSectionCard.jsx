import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import './benefitsSectionCard.css';

const BenefitsSectionCard = ({ title, text }) => (
  <div className='benefits-card__wrapper'>
    <h3 className='benefits-card__title'>
      <FormattedMessage {...messages[title]} />
    </h3>
    <p className='benefits-card__text'>
      <FormattedMessage {...messages[text]} />
    </p>
  </div>
);

BenefitsSectionCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BenefitsSectionCard;
