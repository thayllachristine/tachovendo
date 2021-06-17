import React, { Component } from 'react';
import Navbar from '../../components/navbar/others/navbar';
import Footer from '../../components/Footer/others/footer';
import { getLocalStorage } from '../../network/localStorage';
import './rainyday.scss';
import { PSt, GridRow, GridCol } from './rainyday.styled';
import umbrella from './vectors/umbrella.svg';

class RainyDay extends Component {
  render() {
    return (
      <div className="bg-rainy" onLoad={this.props.rainEffect}>
        <div className="rain-effect">
          <Navbar />
          <GridRow>
            <GridCol>
              <PSt> em {getLocalStorage(`city`)}, vai chover!</PSt>
              <PSt> coloque o guarda chuva em sua bolsa/mochila! </PSt>
            </GridCol>
          </GridRow>

          <GridRow>
            <img
              src={umbrella}
              alt="Guarda-chuva amarelo aberto próximo ao rodapé da página."
            />
          </GridRow>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default RainyDay;
