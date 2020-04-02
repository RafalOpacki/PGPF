import React from 'react';
import logo from '../../images/logo.svg';
import ImageComponent from '../ImageComponent/ImageComponent';
import MenuComponent from '../MenuComponent/MenuComponent';
import BurgerButtonComponent from '../BurgerButtonComponent/BurgerButtonComponent';
import useToggle from '../../hooks/useToggle/useToggle';
import LanguageSwitcherComponent from '../LanguageSwitcherComponent/LanguageSwitcherComponent';
import './navbarComponent.css';

const NavbarComponent = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <nav className='navbar__wrapper'>
      <ImageComponent src={logo} alt='logo' className='navbar__logo' />
      <div className='navbar__menu'>
        <MenuComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <BurgerButtonComponent onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        <LanguageSwitcherComponent
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
      </div>
    </nav>
  );
};

export default NavbarComponent;
