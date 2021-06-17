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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93.5vh;
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 24px;
  padding: 136px 24px;
`;

const Image = styled.img``;

export { BackgroundColor, BackgroundEffect, Content, Text, Image };
