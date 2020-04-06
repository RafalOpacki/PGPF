import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import './textareaComponent.css';

const TextareaComponent = ({ placeholder, name, required }) => {
  const intl = useIntl();

  return (
    <textarea
      name={name}
      className='textarea'
      type='text'
      placeholder={intl.formatMessage(placeholder)}
      rows='8'
      required={required || false}
      autocomplete='off'
    />
  );
};

TextareaComponent.propTypes = {
  placeholder: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  name: PropTypes.string,
  required: PropTypes.bool,
};

export default TextareaComponent;
