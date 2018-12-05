import React, { Component } from 'react'
import { setLocalStorage } from '../../network/localStorage'
import weather from '../../resource/hgbrasil'
import Form from '../../components/form/form'
// import Footer from '../../components/footer/footer'
import { NavHome, PNav, TitleSt, PSt, Grid1stHalfCol, Grid2ndHalfCol, GridRow, Ellipse, FooterHome, FooterHomeP } from './home.styled'
import girl from './vectors/girl.svg'


class Home extends Component {
    constructor(props) {
        super(props)
        this.searchInputRef = React.createRef()
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const searchInput = this.searchInputRef.current
        const city = searchInput.state.value
        //console.log(city)

        setLocalStorage(`city`, city)

        weather(city)
            .then((resp) => {
                const forecast = resp.data.results.forecast[1]
                const condition = forecast.condition
                //console.log(condition)

                if (condition === `storm` || condition === `rain`) {
                    this.props.history.push(`/rainyday`)
                    //console.log('vai chover')
                } else {
                    this.props.history.push(`/sunnyday`)
                    //console.log('não vai chover')
                }
            })

            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <React.Fragment>
                <NavHome>
                    <PNav>tá chovendo?</PNav>
                </NavHome>
                <GridRow>
                    <Grid1stHalfCol>
                        <img src={girl} alt='Menina de cabelo azul sorrindo, pulando e segurando um guarda chuva com a mão direita' />
                    </Grid1stHalfCol>

                    <Grid2ndHalfCol>
                        <TitleSt>oi! :)</TitleSt>
                        <PSt>quantas vezes você tomou chuva por ter esquecido o guarda-chuva em casa?</PSt>
                        <PSt>aqui você vê se amanhã vai chover para colocá-lo na sua bolsa/mochila!</PSt>
                        <PSt>é só inserir a sua cidade e clicar em pesquisar:</PSt>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Label htmlFor='searchInput'>
                                <Form.Input
                                    id='searchInput'
                                    type='text'
                                    placeholder='digite sua cidade...'
                                    ref={this.searchInputRef}
                                />
                            </Form.Label>

                            <Form.Button>
                                <i className="material-icons">search</i>
                            </Form.Button>
                        </Form>
                        <Ellipse />
                    </Grid2ndHalfCol>
                </GridRow>
                <FooterHome>
                    <FooterHomeP>
                        Copyright 2018. Feito por Thaylla Christine
                    </FooterHomeP>
                </FooterHome>
            </React.Fragment >
        )
    }
}


export default Home