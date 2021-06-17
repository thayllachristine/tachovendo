import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import * as S from './Navbar.styled';

const Navbar = () => {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('city');
    history.push('/');
  };
  return (
    <S.Navbar>
      <S.Link href="/" onClick={handleClick}>
        <S.Icon className="material-icons">chevron_left</S.Icon>
      </S.Link>
    </S.Navbar>
  );
};

export default withRouter(Navbar);
