import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import './inputComponent.css';

const InputComponent = ({ placeholder, name, type, required }) => {
  const intl = useIntl();

  return (
    <input
      name={name}
      className='input'
      type={type}
      placeholder={intl.formatMessage(placeholder)}
      required={required || false}
      autoComplete='off'
    />
  );
};

InputComponent.propTypes = {
  placeholder: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default InputComponent;
