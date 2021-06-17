import styled from 'styled-components';

const Navigation = styled.nav`
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const Text = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Sacramento');
  font-family: 'Sacramento', cursive;
  text-shadow: 2.5px 2.5px 1px #ccc;
  color: #6d6d6d;

  @media screen and (max-width: 2560px) {
    font-size: 55px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export { Navigation, Text };
