import React from 'react';
import logo from '../../images/logo.svg';
import './navbarComponent.css';
import ImageComponent from '../ImageComponent/ImageComponent';
import MenuComponent from '../MenuComponent/MenuComponent';
import BurgerButtonComponent from '../BurgerButtonComponent/BurgerButtonComponent';
import useToggle from '../../hooks/useToggle/useToggle';

const NavbarComponent = () => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <nav className='navbar__wrapper'>
      <ImageComponent src={logo} alt='logo' className='navbar__logo' />
      <MenuComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <BurgerButtonComponent onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default NavbarComponent;
