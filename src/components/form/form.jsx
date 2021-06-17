import React, { Component } from 'react';
import FormSt from './form.styled';

import Label from './label/label';
import Input from './input/input';
import Button from './button/button';

class Form extends Component {
  render() {
    return (
      <FormSt className="searchForm" onSubmit={this.props.onSubmit}>
        {this.props.children}
      </FormSt>
    );
  }
}

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
