import React, { Component } from 'react'
import NavStyled from './navbar.styled'

import Button from '../form/button/button'

export default class Navbar extends Component {
    render() {
        return (
            <NavStyled>
                <Button>
                    <i class="material-icons">keyboard_backspace</i>
                </Button>
            </NavStyled>
        )
    }
}