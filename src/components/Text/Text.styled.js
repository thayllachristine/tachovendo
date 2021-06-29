import styled, { css } from 'styled-components';

const Text = styled.div`
  color: ${({ inverse }) => (inverse ? '#FFFFFF' : ' #ffffff')};
  font-size: 24px;
  padding: 136px 24px;

  ${({ inverse }) =>
    inverse &&
    css`
      text-shadow: 2px 2px 4px #4e4e4e;
    `}
`;

export { Text };
