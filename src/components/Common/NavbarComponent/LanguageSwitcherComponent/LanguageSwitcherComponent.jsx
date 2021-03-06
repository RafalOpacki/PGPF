import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import useToggle from 'hooks/useToggle/useToggle';
import { languageLocales, languageNames } from 'constants/languages';
import { supportedLanguages } from './const';
import './languageSwitcherComponent.css';

const LanguageSwitcherComponent = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, toggleMenu] = useToggle();

  const languagesWithoutCurrentLanguage = useMemo(
    () =>
      supportedLanguages.filter(
        (language) => language.name !== currentLanguage.name,
      ),
    [currentLanguage.name],
  );

  const handleClick = useCallback(
    (value) => () => {
      setCurrentLanguage(value);
      toggleMenu();
    },
    [setCurrentLanguage, toggleMenu],
  );

  return (
    <div className="language-switcher__wrapper">
      <button className="language-switcher__button" onClick={toggleMenu}>
        {currentLanguage.name}
      </button>
      {isMenuOpen &&
        languagesWithoutCurrentLanguage.map((language) => (
          <div
            key={language.name}
            className="language-switcher__button-wrapper"
          >
            <button
              className="language-switcher__button"
              onClick={handleClick(language)}
              key={language.name}
            >
              {language.name}
            </button>
          </div>
        ))}
    </div>
  );
};

LanguageSwitcherComponent.propTypes = {
  currentLanguage: PropTypes.shape({
    locale: PropTypes.oneOf([...languageLocales]),
    name: PropTypes.oneOf([...languageNames]),
  }),
  setCurrentLanguage: PropTypes.func,
};

export default LanguageSwitcherComponent;
