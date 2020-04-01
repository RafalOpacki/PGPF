import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './burgerButtonComponent.css';

const BurgerButtonComponent = ({ isMenuOpen, onClick }) => {
  const classes = classNames({
    'burger-button__inner': true,
    'burger-button__inner--rotated': isMenuOpen,
  });

  return (
    <button type='button' className='burger-button__wrapper' onClick={onClick}>
      <div className={classes} />
    </button>
  );
};

BurgerButtonComponent.propTypes = {
  isMenuOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BurgerButtonComponent;
