import React from 'react';
import { sections } from 'constants/sections';
import ImageComponent from 'components/Common/ImageComponent/ImageComponent';
import purchaseImage from 'images/purchase-image.svg';
import PurchaseSectionHeader from './PurchaseSectionHeader/PurchaseSectionHeader';
import PurchaseSectionContent from './PurchaseSectionContent/PurchaseSectionContent';
import './purchaseSection.css';

const PurchaseSection = () => {
  return (
    <section id={sections.purchase} className="purchase-section__wrapper">
      <ImageComponent
        src={purchaseImage}
        alt="purchase"
        className="purchase-section__image"
      />
      <div className="purchase-section__data">
        <PurchaseSectionHeader />
        <PurchaseSectionContent />
      </div>
    </section>
  );
};

export default PurchaseSection;
