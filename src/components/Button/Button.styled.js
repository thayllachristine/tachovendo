import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;
  height: 36px;
  width: 36px;

  @media screen and (min-width: 768px) {
    height: 42px;
    width: 42px;
  }
`;

export { Button };
