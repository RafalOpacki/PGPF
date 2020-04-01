import React from 'react';
import PropTypes from 'prop-types';
import './menuItemComponent.css';

const MenuItemComponent = ({ section, label, toggleMenu, isMenuOpen }) => {
  return (
    <li className='menu-item__wrapper'>
      <a
        className='menu-item__link'
        href={`#${section}`}
        onClick={isMenuOpen ? toggleMenu : null}
      >
        {label}
      </a>
    </li>
  );
};

MenuItemComponent.propTypes = {
  section: PropTypes.string,
  label: PropTypes.string,
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default MenuItemComponent;
