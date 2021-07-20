import styled from 'styled-components';

const Input = styled.input`
  border-radius: 8px;
  border: none;
  padding: 16px;
  width: inherit;

  &::placeholder {
    color: gray;
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

export { Input };
