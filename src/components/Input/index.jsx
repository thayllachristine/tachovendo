import React, { Component } from 'react';
import * as S from './input.styled';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ``,
    };
  }

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
    // const city = this.state.value
  };

  render() {
    return (
      <React.Fragment>
        <S.Input
          type={this.props.type}
          id={this.props.id}
          className="searchInput"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}
