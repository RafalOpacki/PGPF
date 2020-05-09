import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './benefitsSectionHeader.css';

const BenefitsSectionHeader = () => (
  <div className='benefits-header__wrapper'>
    <h2 className='benefits-header__header'>
      <FormattedMessage {...messages.title} />
    </h2>
    <p>
      <FormattedMessage {...messages.text} />
    </p>
  </div>
);

export default BenefitsSectionHeader;
