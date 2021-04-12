import styled, { css } from 'styled-components';

import {
  SCREEN_SMALL,
} from '../constants';

interface Props {
  isFull?: boolean;
  direction?: 'row' | 'column';
  flex?: number;
  background?: string;
}

export const GridContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  flex: 0;

  ${props => props.flex && css`
    flex: ${props.flex};
  `}

  ${props => props.direction && css`
    flex-direction: ${props.direction};
  `}

  @media (min-width: ${SCREEN_SMALL}) {
    max-width: ${SCREEN_SMALL};
  }

  ${props => props.isFull && css`
    max-width: 100% !important;
  `}

  ${props => props.background && css`
    background: ${props.background};
  `}
`;
