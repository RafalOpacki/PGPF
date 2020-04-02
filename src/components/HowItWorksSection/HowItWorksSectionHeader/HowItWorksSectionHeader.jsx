import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './howItWorksSectionHeader.css';

const HowItWorksSectionHeader = () => {
  return (
    <div className='how-it-works-header__wrapper'>
      <h2 className='how-it-works-header__title'>
        <FormattedMessage {...messages.title} />
      </h2>
      <p>
        <FormattedMessage {...messages.text} />
      </p>
    </div>
  );
};

export default HowItWorksSectionHeader;
