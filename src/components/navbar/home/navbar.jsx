import React, { Component } from 'react';
import { NavHome, PNav } from './navbar.styled';

export default class Navbar extends Component {
  render() {
    return (
      <NavHome>
        <PNav>tá chovendo?</PNav>
      </NavHome>
    );
  }
}
