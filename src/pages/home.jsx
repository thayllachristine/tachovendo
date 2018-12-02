import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../components/navbar/navbar'
import Container from '../components/container/container'
import Form from '../components/form/form'
import weather from '../resource/hgbrasil'

import SunnyDay from './sunnyday'
import RainyDay from './rainyday'


const TitleStyled = styled.p`
    margin: 15px auto;
    font-size: 25px;
`

const PStyled = styled.p`
    margin: 5px auto;
    font-size: 20px
`


class Home extends Component {
    constructor(props) {
        super(props)
        this.searchInputRef = React.createRef()
    }


    handleSubmit = (ev) => {
        ev.preventDefault()

        const searchInput = this.searchInputRef.current
        const city = searchInput.state.value
        console.log(city) //

        weather(city)
            .then((resp) => {
                const forecast = resp.data.results.forecast[1]
                const condition = forecast.condition
                console.log(condition)

                if (condition === `storm` || condition === `rain`) {
                    //... do somenthing
                    console.log('vai chover')
                } else {
                    //... do another thing
                    console.log('não vai acontecer nada')
                }
            })

            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <TitleStyled className='text'>oi :)</TitleStyled>
                    <PStyled className='text'>quantas vezes você tomou chuva por ter esquecido o guarda-chuva em casa?</PStyled>
                    <PStyled className='text'>aqui vê se amanhã vai chover para não esquecer de colocar esse item na sua bolsa/mochila!</PStyled>
                    <PStyled className='text'>é só inserir a sua cidade e clicar em pesquisar:</PStyled>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor='searchInput'>
                            <Form.Input
                                id='searchInput'
                                type='text'
                                placeholder='digite..'
                                ref={this.searchInputRef}
                            />

                        </Form.Label>
                        <Form.Button />
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}


export default Home