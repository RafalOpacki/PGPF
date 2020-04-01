import React from 'react';
import { menuItems } from './const';
import MenuItemComponent from './MenuItemComponent/MenuItemComponent';
import './menuComponent.css';

const MenuComponent = () => {
  return (
    <ul className='menu'>
      {menuItems.map((item) => (
        <MenuItemComponent key={item.section} {...item} />
      ))}
    </ul>
  );
};

export default MenuComponent;
