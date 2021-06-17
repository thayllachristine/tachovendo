import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
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

const Home = () => (
  <>
    <Navigation text="tá chovendo?" />

    <img
      src="./vectors/girl.svg"
      alt="Menina de cabelo azul sorrindo, pulando e segurando um guarda chuva com a mão direita"
    />

    <Form>
      <Form.Label htmlFor="searchInput">
        <Form.Input
          id="searchInput"
          type="text"
          placeholder="digite sua cidade..."
          // ref={this.searchInputRef}
        />
      </Form.Label>

      <Form.Button>search</Form.Button>
    </Form>

    <Footer text="Copyright 2018. Feito por Thaylla Christine." />
  </>
);

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.searchInputRef = React.createRef();
//   }

//   render() {
//     return (
//       <>

//

//         {/* <GridRow>
//           <Grid1stHalfCol>

//           </Grid1stHalfCol>

//           <Grid2ndHalfCol>
//             <Ellipse>
//               <TitleSt>oi! :)</TitleSt>
//               <PSt>
//                 quantas vezes você tomou chuva por ter esquecido o guarda-chuva
//                 em casa?
//               </PSt>
//               <PSt>
//                 aqui você vê se amanhã vai chover para colocá-lo na sua
//                 bolsa/mochila!
//               </PSt>
//               <PSt>é só inserir a sua cidade e clicar em pesquisar:</PSt>

//             </Ellipse>
//           </Grid2ndHalfCol>
//         </GridRow> */}

//
//       </>
//     );
//   }
// }

export default Home;
