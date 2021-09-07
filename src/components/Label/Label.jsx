import React from 'react';
import * as S from './Label.styled';

const Label = ({ htmlFor, children }) => (
  <S.Label htmlFor={htmlFor}>{children}</S.Label>
);

export default Label;
