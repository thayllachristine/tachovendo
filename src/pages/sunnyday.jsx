import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../components/container/container'


const PStyled = styled.p`
    margin: 0 auto;
    font-size: 20px
`


class SunnyDay extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Container>
                <PStyled> em _____________, não vai chover! </PStyled>
                <PStyled> aproveite seu dia! </PStyled>
            </Container>

        )
    }
}


export default SunnyDay