import React from 'react';
import ContactSectionHeader from './ContactSectionHeader/ContactSectionHeader';
import FormComponent from '../FormComponent/FormComponent';
import { sections } from '../../constants/sections';
import './contactSection.css';

const ContactSection = () => (
  <section id={sections.contact} className='contact-section__wrapper'>
    <ContactSectionHeader />
    <FormComponent />
  </section>
);

export default ContactSection;
