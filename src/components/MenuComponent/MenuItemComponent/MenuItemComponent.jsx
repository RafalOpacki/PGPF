import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { menuItems } from '../const';
import './menuItemComponent.css';

const MenuItemComponent = ({ toggleMenu, isMenuOpen, menuItem }) => (
  <li className='menu-item__wrapper'>
    <a
      className='menu-item__link'
      href={`#${menuItem}`}
      onClick={isMenuOpen ? toggleMenu : null}
    >
      <FormattedMessage {...messages[menuItem]} />
    </a>
  </li>
);

MenuItemComponent.propTypes = {
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  menuItem: PropTypes.oneOf([...menuItems]),
};

export default MenuItemComponent;
