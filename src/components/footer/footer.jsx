import React, { Component } from 'react'
import { FooterSt, PhSt } from './footer.styled'

export default class Footer extends Component {
    render() {
        return (
            <FooterSt>
                <PhSt>
                    Copyright 2018 - Desenvolvido por Thaylla Christine
                </PhSt>
            </FooterSt>
        )
    }
}