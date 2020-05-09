import React from 'react';
import PropTypes from 'prop-types';
import { languageNames, languageLocales } from 'constants/languages';
import logo from 'images/logo.svg';
import useToggle from 'hooks/useToggle/useToggle';
import ImageComponent from 'components/Common/ImageComponent/ImageComponent';
import MenuComponent from './MenuComponent/MenuComponent';
import BurgerButtonComponent from './BurgerButtonComponent/BurgerButtonComponent';
import LanguageSwitcherComponent from './LanguageSwitcherComponent/LanguageSwitcherComponent';
import './navbarComponent.css';

const NavbarComponent = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <nav className="navbar__wrapper">
      <ImageComponent src={logo} alt="logo" className="navbar__logo" />
      <div className="navbar__menu">
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

NavbarComponent.propTypes = {
  currentLanguage: PropTypes.shape({
    locale: PropTypes.oneOf([...languageLocales]),
    name: PropTypes.oneOf([...languageNames]),
  }),
  setCurrentLanguage: PropTypes.func,
};

export default NavbarComponent;
