import React, { Component } from 'react'
import styled from 'styled-components'

import tachovendo from './logo.svg'

const NavStyled = styled.nav`
    border-bottom: 1px solid lightgray;

    display: flex;
    justify-content: space-between;
`

const LogoStyled = styled.img`
    width: 100px;

`


export default class Navbar extends Component {
    render() {
        return (
            <NavStyled>
                <div>
                    <LogoStyled src={tachovendo} alt="" />
                </div>
                <div></div>
            </NavStyled>

        )
    }
}