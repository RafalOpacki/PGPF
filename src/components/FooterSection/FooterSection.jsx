import React from 'react';
import './footerSection.css';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return <footer className='footer'>PGPF &copy; {currentYear}</footer>;
};

export default FooterSection;
