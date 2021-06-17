import React from 'react';

import Navbar from '../../components/Navbar';
import Content from '../../components/Content';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

import {
  // BackgroundEffect,
  BackgroundColor,
} from './RainyDay.styled';
import './animation.scss';

import umbrella from './../../assets/umbrella.svg';

const RainyDay = () => (
  <BackgroundColor>
    <div className="BackgroundEffect">
      <Navbar />

      <Content>
        <Text>
          <p> em {localStorage.getItem('city')}, vai chover!</p>
          <p> coloque o guarda chuva em sua bolsa/mochila! </p>
        </Text>

        <img
          src={umbrella}
          alt="Guarda-chuva amarelo aberto próximo ao rodapé da página."
        />
      </Content>

      <Footer internal />
    </div>
  </BackgroundColor>
);

export default RainyDay;
