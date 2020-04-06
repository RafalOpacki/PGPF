import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import NavbarComponent from '../src/components/NavbarComponent/NavbarComponent';
import BackToTopComponent from './components/BackToTopComponent/BackToTopComponent';
import HomeSection from './components/HomeSection/HomeSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import AboutSection from './components/AboutSection/AboutSection';
import PurchaseSection from './components/PurchaseSection/PurchaseSection';
import ContactSection from './components/ContactSection/ContactSection';
import FooterSection from './components/FooterSection/FooterSection';
import pl from './lang/pl';
import en from './lang/en';
import { languages } from './constants/languages';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(languages.pl);

  const messages = {
    en,
    pl,
  };

  return (
    <IntlProvider
      locale={currentLanguage.locale}
      key={currentLanguage.locale}
      messages={messages[currentLanguage.name]}
    >
      <div className='App'>
        <NavbarComponent
          setCurrentLanguage={setCurrentLanguage}
          currentLanguage={currentLanguage}
        />
        <HomeSection />
        <AboutSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PurchaseSection />
        <ContactSection />
        <FooterSection />
        <BackToTopComponent />
      </div>
    </IntlProvider>
  );
}

export default App;
