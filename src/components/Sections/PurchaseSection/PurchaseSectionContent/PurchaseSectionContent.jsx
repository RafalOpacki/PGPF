import React from 'react';
import './purchaseSectionContent.css';
import { content } from './const';

const PurchaseSectionContent = () => {
  return (
    <ul>
      {content.map((item, index) => {
        return (
          <li key={index} className='purchase-content__wrapper'>
            <i className='fas fa-check purchase-content__icon'></i>
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PurchaseSectionContent;
