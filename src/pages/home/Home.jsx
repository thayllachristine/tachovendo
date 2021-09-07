import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text, Content, Container, Image } from './Home.styled';

import weather from '../../resource/hgbrasil';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

import girl from './../../assets/girl.svg';

const Home = () => {
  const searchInputRef = React.createRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = searchInputRef.current;
    const city = searchInput.state.value;

    localStorage.setItem(`city`, city);

    weather(city)
      .then((resp) => {
        const forecast = resp.data.results.forecast[1];
        const condition = forecast.condition;

        if (condition === `storm` || condition === `rain`) {
          history.push(`/rainyday`);
        } else {
          this.props.history.history.push(`/sunnyday`);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Image
          src={girl}
          alt="Menina de cabelo azul sorrindo, pulando e segurando um guarda chuva com a mão direita"
        />

        <Content>
          <Text>lorem lorem lorem lorem lorem</Text>

          <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="searchInput">
              <Form.Input
                id="searchInput"
                type="text"
                placeholder="lorem to city"
                ref={searchInputRef}
              />
            </Form.Label>

            <Form.Button>
              <i className="material-icons">search</i>
            </Form.Button>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
