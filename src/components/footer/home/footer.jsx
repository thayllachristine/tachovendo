import React, { Component } from 'react'
import { FooterHome, FooterHomeP } from './footer.styled'

export default class Footer extends Component {
    render() {
        return (
            <FooterHome>
                <FooterHomeP>
                    Copyright 2018. Feito por Thaylla Christine.
                </FooterHomeP>
            </FooterHome>
        )
    }
}