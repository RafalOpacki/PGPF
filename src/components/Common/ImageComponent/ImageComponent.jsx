import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ImageComponent;
