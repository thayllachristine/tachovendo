import React from 'react';

import Navbar from '../../components/Navbar';
import Content from '../../components/Content';
import Text from '../../components/Text';

import Footer from '../../components/Footer';

import { BackgroundColor, Tree, Sun } from './SunnyDay.styled';

import sun from '../../assets/sun.svg';
import tree from '../../assets/tree.svg';

const SunnyDay = () => (
  <BackgroundColor>
    <Navbar />

    <Content>
      <Tree
        src={tree}
        alt="Duas árvores de tonalidades diferentes de verde e um banco amarelo ao lardo direito."
      />

      <Text inverse>
        <p> em {localStorage.getItem('city')}, não vai chover! </p>
        <p> aproveite seu dia! </p>
      </Text>

      <Sun
        src={sun}
        alt="Sol amarelo com raios girando no canto superior direito."
      />
    </Content>

    <Footer internal />
  </BackgroundColor>
);

export default SunnyDay;
