import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { menuItems } from './const';
import MenuItemComponent from './MenuItemComponent/MenuItemComponent';
import './menuComponent.css';

const MenuComponent = ({ isMenuOpen, toggleMenu }) => {
  const classes = useMemo(() => (isMenuOpen ? 'menu--opened' : 'menu'), [
    isMenuOpen,
  ]);

  return (
    <ul className={classes}>
      {menuItems.map((menuItem) => (
        <MenuItemComponent
          key={menuItem}
          menuItem={menuItem}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      ))}
    </ul>
  );
};

MenuComponent.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default MenuComponent;
