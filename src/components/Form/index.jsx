import * as S from './Form.styled';

import Label from './../Label';
import Input from './../Input';
import Button from './../Button';

const Form = ({ children, onSubmit }) => (
  <S.Form onSubmit={onSubmit}>{children}</S.Form>
);

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
