import styled from 'styled-components';

export const CategoryList = styled.div`
  display: flex;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    li {
      display: flex;
      width: 50%;
      height: 200px;
      padding: 10px;
      list-style: none;      

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 10px;
        background: #19B1FC;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: #111;
        cursor: pointer;
        transition: all .2s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
