import styled from 'styled-components';

export const TitleSt = styled.p`
  text-align: center;
  margin: 15px auto;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1440px) and (min-height: 615px) {
    font-size: 25px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PSt = styled.p`
  text-align: center;

  @media screen and (max-width: 2560px) {
    margin: 7.5px auto;
    font-size: 30px;
  }

  @media screen and (max-width: 1440px) {
    margin: 5px auto;
    font-size: 17.5px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 2560px) {
    height: 962px;
  }

  @media screen and (max-width: 1440px) {
    height: 510px;
  }

  @media screen and (max-width: 1024px) {
    height: 530px;
  }

  @media screen and (max-width: 768px) {
    height: 510px;
  }
`;

export const IconSearch = styled.i`
  @media screen and (max-width: 2560px) {
    font-size: 35px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 17.5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Grid1stHalfCol = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const Grid2ndHalfCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ImgGirl = styled.img`
  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

export const Ellipse = styled.div`
  padding: 15px;
  border: 1px solid #cccccc78;
  border-radius: 20px;
  background-color: #cccccc78;

  @media screen and (max-width: 768px) {
    width: 375px;
    height: 200px;
    padding: 10px;
  }
`;
