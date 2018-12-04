import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { removeLocalStorage } from '../../network/localStorage'
import NavStyled from './navbar.styled'
import Button from '../form/button/button'

class Navbar extends Component {

    handleClick = (event) => {
        event.preventDefault();
        removeLocalStorage('city')
        this.props.history.push('/home')
    }

    render() {
        return (
            <NavStyled>
                <a href='/home' onClick={this.handleClick}>
                    <Button>
                        <i className="material-icons">keyboard_backspace</i>
                    </Button>
                </a>
            </NavStyled>
        )
    }
}

export default withRouter(Navbar)