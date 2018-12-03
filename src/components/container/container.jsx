import React, { Component } from 'react'
import ContainerStyled from './container.styled'

export default class Container extends Component {
    render() {
        return (
            <ContainerStyled className='container'>
                {this.props.children}
            </ContainerStyled>
        )
    }
}