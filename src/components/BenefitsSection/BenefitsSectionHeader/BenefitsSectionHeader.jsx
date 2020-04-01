import React from 'react';
import './benefitsSectionHeader.css';

const BenefitsSectionHeader = () => {
  return (
    <div className='benefits-header__wrapper'>
      <h2 className='benefits-header__header'>Korzyści</h2>
      <p>
        0 zł za rachunki za prąd, a nadwyżkę energii, której nie zużyjesz od
        razu, możesz wprowadzić do sieci dystrybucyjnej i odebrać 80% tej
        energii w przeciągu roku, bez dodatkowych opłat.
      </p>
    </div>
  );
};

export default BenefitsSectionHeader;
