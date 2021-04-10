import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 10px;

    &:nth-child(2) {
      flex: 1;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-weight: 400;
  }
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  opacity: .8;
  transition: all .2s;

  &:hover {
    opacity: 1;
  }
`;
