import React from 'react';
import PropTypes from 'prop-types';
import './menuItemComponent.css';

const MenuItemComponent = ({ section, label }) => {
  return (
    <li className='menu-item__wrapper'>
      <a className='menu-item__link' href={`#${section}`}>
        {label}
      </a>
    </li>
  );
};

MenuItemComponent.propTypes = {
  section: PropTypes.string,
  label: PropTypes.string,
};

export default MenuItemComponent;
