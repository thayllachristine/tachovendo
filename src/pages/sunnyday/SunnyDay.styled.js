import styled from 'styled-components';

const BackgroundColor = styled.div`
  background-color: #9be0fd;
`;

const Tree = styled.img`
  width: 360px;
  bottom: 0;
  position: absolute;
  left: 4%;
`;

const Sun = styled.img`
  animation: sun 15s linear infinite;
  position: absolute;
  right: 16px;
  top: 4px;

  @keyframes sun {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { BackgroundColor, Tree, Sun };
