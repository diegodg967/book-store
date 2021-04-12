import styled, { css } from 'styled-components';

import EmptyStar from '../../assets/icons/star-regular.svg';
import Star from '../../assets/icons/star-solid.svg';

export const Container = styled.div`
  ul {
    display: flex;
    height: 20px;
    opacity: .6;

    &:hover > li {
      background: url(${Star}) no-repeat center center;
      background-size: 16px 16px;
    }
  
    li {
      display: inline-flex;
      width: 20px;
      height: 20px;
      background: url(${EmptyStar}) no-repeat center center;
      background-size: 16px 16px;
      cursor: pointer;

      &.active {
        background: url(${Star}) no-repeat center center;
        background-size: 16px 16px;
      }

      &:hover ~ li {
        background: url(${EmptyStar}) no-repeat center center;
        background-size: 16px 16px;
      }
    }

    
  }  
`;
