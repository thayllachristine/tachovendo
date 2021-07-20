import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import * as S from './Navbar.styled';

const Navbar = ({ internal }) => {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('city');
    history.push('/');
  };
  return (
    <S.Navbar>
      {internal ? (
        <S.Link href="/" onClick={handleClick}>
          <S.Icon className="material-icons">chevron_left</S.Icon>
        </S.Link>
      ) : (
        <S.Text>tá chovendo?</S.Text>
      )}
    </S.Navbar>
  );
};

export default withRouter(Navbar);
