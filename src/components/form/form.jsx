import React, { Component } from 'react'
import styled from 'styled-components'

import Label from './label/label'
import Input from './input/input'
import Button from './button/button'


const FormStyled = styled.form`
    display: flex;
    justify-content: center;
`


class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FormStyled className='searchForm' onSubmit={this.props.onSubmit}>
                {this.props.children}
            </FormStyled>
        )
    }
}


Form.Label = Label
Form.Input = Input
Form.Button = Button


export default Form