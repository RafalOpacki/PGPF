import React, { useCallback } from 'react';
import './backToTopComponent.css';

const BackToTopComponent = () => {
  const scrollToTop = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }),
    [],
  );

  return (
    <button className='back-to-top__button' onClick={scrollToTop}>
      <i class='fas fa-chevron-up'></i>
    </button>
  );
};

export default BackToTopComponent;
