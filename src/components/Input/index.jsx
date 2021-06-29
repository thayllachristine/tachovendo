import React, { useState } from 'react';
import * as S from './Input.styled';

const Input = ({ type, id, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue({ value: e.target.value });

  return (
    <S.Input
      type={type}
      id={id}
      className="searchInput"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
