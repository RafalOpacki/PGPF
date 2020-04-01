import React from 'react';
import './homeSection.css';
import homeImage from '../../images/home-image.svg';
import ImageComponent from '../ImageComponent/ImageComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { sections } from '../../constants/sections';

const HomeSection = () => {
  return (
    <section id={sections.home}>
      <div className='home-section__wrapper'>
        <div>
          <h2 className='home-section__title'>Energia ze słońca</h2>
          <h3 className='home-section__subtitle'>Fotowoltaika</h3>
          <ButtonComponent text='zobacz jak to działa' />
        </div>
        <ImageComponent
          src={homeImage}
          alt='home-image'
          className='home-section__image'
        />
      </div>
    </section>
  );
};

export default HomeSection;
