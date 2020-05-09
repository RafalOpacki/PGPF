import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './buttonComponent.css';

const ButtonComponent = ({ text, fullWidth, type }) => {
  const classes = useMemo(
    () => classNames('button', { 'button--full-width': fullWidth }),
    [fullWidth],
  );

  return (
    <button className={classes} type={type || 'button'}>
      <FormattedMessage {...text} />
    </button>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};

export default ButtonComponent;
