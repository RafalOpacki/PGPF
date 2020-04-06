import React from 'react';
import { FormattedMessage } from 'react-intl';
import { contactData } from './const';
import messages from './messages';
import './contactSectionHeader.css';

const ContactSectionHeader = () => (
  <div className='contact-header__wrapper'>
    <h2 className='contact-header__header'>
      <FormattedMessage {...messages.title} />
    </h2>
    <p className='contact-header__text'>
      <FormattedMessage {...messages.text} />
    </p>
    <ul className='contact-header__data-wraper'>
      {contactData.map(({ type, data, icon }) => (
        <li key={type} className='contact-header__data-item'>
          {icon}
          <p>{data}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactSectionHeader;
