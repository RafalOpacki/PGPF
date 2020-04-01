import React from 'react';
import NavbarComponent from '../src/components/NavbarComponent/NavbarComponent';
import BackToTopComponent from './components/BackToTopComponent/BackToTopComponent';
import HomeSection from './components/HomeSection/HomeSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import AboutSection from './components/AboutSection/AboutSection';

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <HomeSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <BackToTopComponent />
    </div>
  );
}

export default App;
