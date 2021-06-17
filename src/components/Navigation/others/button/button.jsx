import React, { Component } from 'react'
import ButtonSt from './button.styled'

export default class Button extends Component {
    render() {
        return (
            <ButtonSt>
                {this.props.children}
            </ButtonSt>
        )
    }
}