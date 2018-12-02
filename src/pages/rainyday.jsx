import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../components/container/container'


const PStyled = styled.p`
    margin: 0 auto;
    font-size: 20px
`


class RainyDay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <PStyled> em ___________, vai chover! </PStyled>
                <PStyled> coloque o guarda chuva em sua bolsa/mochila! </PStyled>
            </Container >
        )
    }
}


export default RainyDay