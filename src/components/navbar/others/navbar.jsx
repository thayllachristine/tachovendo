import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './button/button';
import NavStyled from './navbar.styled';

class Navbar extends Component {
  handleClick(ev) {
    ev.preventDefault();
    localStorage.removeItem('city');
    this.props.history.push('/');
  }

  render() {
    return (
      <NavStyled>
        <a href="/" onClick={this.handleClick}>
          <Button>
            <i className="material-icons">keyboard_backspace</i>
          </Button>
        </a>
      </NavStyled>
    );
  }
}

export default withRouter(Navbar);
