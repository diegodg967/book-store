import styled from 'styled-components';

import {
  SCREEN_SMALL,
} from '../../constants';

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30px;
  overflow: hidden;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-bottom: 10px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;
      min-height: 150px;
      padding: 10px;
      list-style: none;
      cursor: pointer;
      transition: all .2s;

      @media (min-width: ${SCREEN_SMALL}) {
        width: 20%;
      }

      &:hover {
        transform: scale(1.05);
      }

      img {
        max-width: 100%;
      }
    }    
  }

  button {
    margin: 0 auto;
  }
`;

export const NoCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  max-width: 130px;
  height: 100%;
  padding: 15px 5px;
  background: #e3dd00;

  span {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
`;
