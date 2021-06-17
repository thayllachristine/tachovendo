import styled from 'styled-components';

export const ButtonSt = styled.button`
  border: 1.5px solid #80808099;
  border-radius: 10px;
  margin-left: 0;
  background-color: transparent;

  @media screen and (max-width: 2560px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 1440px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export default ButtonSt;
