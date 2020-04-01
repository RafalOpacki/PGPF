import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './menuItemComponent.css';

const MenuItemComponent = ({ section, label }) => {
  const onClick = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }),
    [],
  );

  return (
    <li className='menu-item__wrapper'>
      <a className='menu-item__link' href={`#${section}`} onClick={onClick}>
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
