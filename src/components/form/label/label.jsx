import React, { Component } from 'react'
import LabelSt from './label.styled'

export default class Label extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LabelSt htmlFor={this.props.htmlFor} >
                {this.props.children}
            </LabelSt>
        )
    }
}