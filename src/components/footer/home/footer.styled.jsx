import styled from 'styled-components';

export const FooterHome = styled.footer`
  padding: 13.5px;
  display: flex;
  align-items: center;

  background-color: #cccccc78;

  @media screen and (max-width: 2560px) {
    height: 100px;
  }

  @media screen and (max-width: 1440px) {
    height: 50px;
  }

  @media screen and (max-width: 1024px) {
    height: 42.5px;
  }
`;

export const FooterHomeP = styled.p`
  @media screen and (max-width: 2560px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 12.5px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
`;
