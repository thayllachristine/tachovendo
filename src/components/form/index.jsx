import React from 'react';
import * as S from './Form.styled';

import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const Form = ({ onSubmit, children }) => (
  <S.Form className="searchForm" onSubmit={onSubmit}>
    {children}
  </S.Form>
);

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
