import styled, { keyframes } from 'styled-components';

const BackgroundColor = styled.div`
  background-color: #5b618a;
`;

const rain = keyframes`
  0% { background-position: 0; }
  100% { background-position: 10% 0; }
`;

const BackgroundEffect = styled.div`
  animation: 0.25s ${rain} linear infinite;
  background: url('./../../raindrops.png');
  height: 100vh;
`;

const Image = styled.img``;

export { BackgroundColor, BackgroundEffect, Image };
