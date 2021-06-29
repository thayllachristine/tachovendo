import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 87.5vh;
  width: 100%;
`;

const Image = styled.img`
  width: 60%;
`;
const Content = styled.div`
  padding: 24px;
  width: 80%;
  border-radius: 8px;
  background-color: #eeeeee;
`;

const Text = styled.p`
  text-align: center;
  line-height: 24px;
`;

export { Container, Image, Content, Text };
