import React, { Component } from 'react';
import LabelSt from './label.styled';

export default class Label extends Component {
  render() {
    return (
      <LabelSt htmlFor={this.props.htmlFor}>{this.props.children}</LabelSt>
    );
  }
}
