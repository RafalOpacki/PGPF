import React from 'react';
import ButtonComponent from 'components/Common/ButtonComponent/ButtonComponent';
import TextareaComponent from '../TextareaComponent/TextareaComponent';
import InputComponent from '../InputComponent/InputComponent';
import messages from './messages';
import './formComponent.css';

const FormComponent = () => (
  <form className="form__wrapper" action="mail.php" method="post">
    <InputComponent
      name="name"
      placeholder={messages.name}
      type="text"
      required
    />
    <InputComponent
      name="email"
      placeholder={messages.email}
      type="email"
      required
    />
    <TextareaComponent name="message" placeholder={messages.message} required />
    <ButtonComponent fullWidth text={messages.submit} type="submit" />
  </form>
);

export default FormComponent;
