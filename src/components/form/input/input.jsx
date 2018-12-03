import React, { Component } from 'react'
import styled from 'styled-components'


const InputStyled = styled.input`
    width: 350px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 10px
    
    ::placeholder {
        color: gray;
    }
`


export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ``,
        }
    }


    handleChange = (ev) => {
        this.setState({ value: ev.target.value })
        // const city = this.state.value
    }


    render() {
        return (
            <React.Fragment>
                <InputStyled
                    type={this.props.type}
                    id={this.props.id}
                    className='searchInput'
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </React.Fragment>
        )
    }
}