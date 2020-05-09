import React from 'react';
import { content } from './const';
import './purchaseSectionContent.css';

const PurchaseSectionContent = () => (
  <ul>
    {content.map((item, index) => {
      return (
        <li key={index} className="purchase-content__wrapper">
          <i className="fas fa-check purchase-content__icon"></i>
          <p>{item}</p>
        </li>
      );
    })}
  </ul>
);

export default PurchaseSectionContent;
