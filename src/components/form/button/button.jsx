import React, { Component } from 'react'

import styled from 'styled-components'


const ButtonStyle = styled.button`
    width: 50px;
    height: 50px;
    border: .5px solid lightgray;
    border-radius: 10px;
    background-color: transparent;
`


export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ButtonStyle>
                <i class="material-icons">search</i>
            </ButtonStyle>
        )
    }
}