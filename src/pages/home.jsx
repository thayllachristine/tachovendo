import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../components/container/container'
import Form from '../components/form/form'
import weather from '../resource/hgbrasil'



const PStyled = styled.p`
    margin: 0 auto;
    font-size: 20px
`


// function writing(el) {
//     const letArr = 
// }



class Home extends Component {
    constructor(props) {
        super(props)
        this.searchInputRef = React.createRef()
    }


    handleSubmit = (ev) => {
        ev.preventDefault()

        const searchInput = this.searchInputRef.current
        const city = searchInput.state.value
        console.log(city)

        weather(city)
            .then((resp) => {
                const forecast = resp.data.results.forecast[1]
                const condition = forecast.condition
                console.log(condition)

                if (condition === `storm`) {
                    //... do somenthing
                } else {
                    //... do another thing
                }
            })

            .catch((error) => {
                console.log(error)
            })
    }





    render() {
        return (
            <Container>
                <PStyled>oi :)</PStyled>

                <PStyled>
                    já parou para pensar quantas vezes você tomou chuva por ter esquecido o guarda-chuva em casa?
                </PStyled>

                <PStyled>
                    no 'Tá Chovendo?' você vê se amanhã vai chover para não esquecer de colocar esse item na sua bolsa/mochila!
                </PStyled>

                <PStyled>
                    para isso, é só inserir a sua cidade e clicar em pesquisar:
                </PStyled>


                <Form onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor='searchInput'>
                        <Form.Input
                            id='searchInput'
                            type='text'
                            placeholder='digite..'
                            ref={this.searchInputRef}
                        />
                    </Form.Label>
                    <Form.Button>A</Form.Button>
                </Form>
            </Container>
        )
    }
}


export default Home