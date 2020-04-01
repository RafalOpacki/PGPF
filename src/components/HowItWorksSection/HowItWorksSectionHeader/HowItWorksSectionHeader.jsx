import React from 'react';
import './howItWorksSectionHeader.css';

const HowItWorksSectionHeader = () => {
  return (
    <div className='how-it-works-header__wrapper'>
      <h2 className='how-it-works-header__header'>Jak to działa?</h2>
      <p>
        To proste! Promienie słoneczne padają na ogniwa fotowoltaiczne i zostają
        zamienione na prąd stały, a następnie na prąd przemienny, który trafia
        do gniazdka w Twoim domu. A jeśli instalacja wyprodukuje więcej prądu
        niż zużywasz w danej chwili, nadmiar trafi do sieci i wciąż będzie dla
        Ciebie dostępny w dowolnym momencie.
      </p>
    </div>
  );
};

export default HowItWorksSectionHeader;
