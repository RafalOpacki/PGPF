import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import NavbarComponent from 'components/Common/NavbarComponent/NavbarComponent';
import BackToTopComponent from 'components/Common/BackToTopComponent/BackToTopComponent';
import FooterSection from 'components/Sections/FooterSection/FooterSection';
import ContactSection from 'components/Sections/ContactSection/ContactSection';
import PurchaseSection from 'components/Sections/PurchaseSection/PurchaseSection';
import BenefitsSection from 'components/Sections/BenefitsSection/BenefitsSection';
import HowItWorksSection from 'components/Sections/HowItWorksSection/HowItWorksSection';
import AboutSection from 'components/Sections/AboutSection/AboutSection';
import HomeSection from 'components/Sections/HomeSection/HomeSection';
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
      <div className="App">
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
