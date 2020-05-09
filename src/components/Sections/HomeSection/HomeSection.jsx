import React from 'react';
import { FormattedMessage } from 'react-intl';
import homeImage from 'images/home-image.svg';
import { sections } from 'constants/sections';
import ImageComponent from 'components/Common/ImageComponent/ImageComponent';
import ButtonComponent from 'components/Common/ButtonComponent/ButtonComponent';
import messages from './messages';
import './homeSection.css';

const HomeSection = () => {
  return (
    <section id={sections.home}>
      <div className="home-section__wrapper">
        <div>
          <h2 className="home-section__title">
            <FormattedMessage {...messages.title} />
          </h2>
          <h3 className="home-section__subtitle">
            <FormattedMessage {...messages.subtitle} />
          </h3>
          <a href={`#${sections.howItWorks}`}>
            <ButtonComponent text={messages.howItWorksButton} />
          </a>
        </div>
        <ImageComponent
          src={homeImage}
          alt="home-image"
          className="home-section__image"
        />
      </div>
    </section>
  );
};

export default HomeSection;
