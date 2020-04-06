import React from 'react';
import TextareaComponent from '../TextareaComponent/TextareaComponent';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import messages from './messages';
import './formComponent.css';

const FormComponent = () => {
  return (
    <form className='form__wrapper' action='mail.php' method='POST'>
      <InputComponent
        name='name'
        placeholder={messages.name}
        type='text'
        required
      />
      <InputComponent
        name='email'
        placeholder={messages.email}
        type='email'
        required
      />
      <TextareaComponent
        name='message'
        placeholder={messages.message}
        required
      />
      <ButtonComponent fullWidth text={messages.submit} />
    </form>
  );
};

export default FormComponent;
