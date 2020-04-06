import React from 'react';
import ContactSectionHeader from './ContactSectionHeader/ContactSectionHeader';
import FormComponent from '../FormComponent/FormComponent';
import MapComponent from '../MapComponent/MapComponent';
import { sections } from '../../constants/sections';
import './contactSection.css';

const ContactSection = () => (
  <section id={sections.contact} className='contact-section__wrapper'>
    <ContactSectionHeader />
    <div className='contact-section__content'>
      <FormComponent />
      <MapComponent />
    </div>
  </section>
);

export default ContactSection;
