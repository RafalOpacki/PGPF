import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttonComponent.css';

const ButtonComponent = ({ text, fullWidth }) => {
  const classes = useMemo(
    () => classNames('button', { 'button--full-width': fullWidth }),
    [fullWidth],
  );

  return <button className={classes}>{text}</button>;
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default ButtonComponent;
