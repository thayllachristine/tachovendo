import React from 'react';
import * as S from './Footer.styled';

const Footer = ({ internal }) =>
  internal ? (
    <S.InternalFooter>
      <p>Copyright 2018. Feito por Thaylla Christine.</p>
    </S.InternalFooter>
  ) : (
    ''
  );

export default Footer;
