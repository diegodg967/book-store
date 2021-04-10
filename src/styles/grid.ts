import styled from 'styled-components';

import {
  SCREEN_SMALL,
} from '../constants';

export const GridContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: ${SCREEN_SMALL}) {
    width: ${SCREEN_SMALL};
  }
`;
