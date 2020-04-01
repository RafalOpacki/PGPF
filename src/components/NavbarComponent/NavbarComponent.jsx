import React from 'react';
import logo from '../../images/logo.svg';
import './navbarComponent.css';
import ImageComponent from '../ImageComponent/ImageComponent';
import MenuComponent from '../MenuComponent/MenuComponent';

const NavbarComponent = () => {
  return (
    <nav className='navbar__wrapper'>
      <ImageComponent src={logo} alt='logo' className='navbar__logo' />
      <MenuComponent />
    </nav>
  );
};

export default NavbarComponent;
