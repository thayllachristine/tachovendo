import * as S from './label.styled';

const Label = ({ children, htmlFor }) => (
  <S.Label htmlFor={htmlFor}>{children}</S.Label>
);

export default Label;
