import React, { Component } from 'react'
import styled from 'styled-components'


const ContainerStyled = styled.div`
    width: 900px;
    height: 500px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
`


export default class Container extends Component {
    render() {
        return (
            <ContainerStyled className='container'>
                {this.props.children}
            </ContainerStyled>
        )
    }
}