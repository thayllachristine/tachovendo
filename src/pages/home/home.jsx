import React, { Component } from 'react';
import { setLocalStorage } from '../../network/localStorage';
import weather from '../../resource/hgbrasil';
import Navbar from '../../components/navbar/home/navbar';
import Form from '../../components/form/form';
import Footer from '../../components/Footer/home/footer';
import {
  TitleSt,
  PSt,
  Grid1stHalfCol,
  Grid2ndHalfCol,
  GridRow,
  IconSearch,
  Ellipse,
  ImgGirl,
} from './home.styled';
import girl from './vectors/girl.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const searchInput = this.searchInputRef.current;
    const city = searchInput.state.value;
    //console.log(city)

    setLocalStorage(`city`, city);

    weather(city)
      .then((resp) => {
        const forecast = resp.data.results.forecast[1];
        const condition = forecast.condition;
        //console.log(condition)

        if (condition === `storm` || condition === `rain`) {
          this.props.history.push(`/rainyday`);
          //console.log('vai chover')
        } else {
          this.props.history.push(`/sunnyday`);
          //console.log('não vai chover')
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <GridRow>
          <Grid1stHalfCol>
            <ImgGirl
              src={girl}
              alt="Menina de cabelo azul sorrindo, pulando e segurando um guarda chuva com a mão direita"
            />
          </Grid1stHalfCol>

          <Grid2ndHalfCol>
            <Ellipse>
              <TitleSt>oi! :)</TitleSt>
              <PSt>
                quantas vezes você tomou chuva por ter esquecido o guarda-chuva
                em casa?
              </PSt>
              <PSt>
                aqui você vê se amanhã vai chover para colocá-lo na sua
                bolsa/mochila!
              </PSt>
              <PSt>é só inserir a sua cidade e clicar em pesquisar:</PSt>

              <Form onSubmit={this.handleSubmit}>
                <Form.Label htmlFor="searchInput">
                  <Form.Input
                    id="searchInput"
                    type="text"
                    placeholder="digite sua cidade..."
                    ref={this.searchInputRef}
                  />
                </Form.Label>

                <Form.Button>
                  <IconSearch className="material-icons">search</IconSearch>
                </Form.Button>
              </Form>
            </Ellipse>
          </Grid2ndHalfCol>
        </GridRow>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
