import React from 'react';
import * as S from './Text.styled';

const Text = ({ children, inverse }) => (
  <S.Text inverse={inverse}>{children}</S.Text>
);

export default Text;
