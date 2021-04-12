import styled, { css } from 'styled-components';

interface Props {
  isFavorite?: boolean;
}

export const Container = styled.button<Props>`
  width: 40px;
  height: 40px;
  padding-top: 3px;
  border-radius: 50%;
  border: 2px solid #e83a53;
  background: none;

  ${props => props.isFavorite && css`
    background: #e83a53;
  `}
`;
