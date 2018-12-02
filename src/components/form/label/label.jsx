import React, { Component } from 'react'
import styled from 'styled-components'


const LabelStyled = styled.label`
    margin-right: 5px;
`   


export default class Label extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LabelStyled htmlFor={this.props.htmlFor} >
                {this.props.children}
            </LabelStyled>
        )
    }
}