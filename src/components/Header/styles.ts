import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0 10px;

    &:nth-child(1),
    &:nth-child(3) {
      width: 50px;
      height: 50px;
    }

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

export const SearchContainer = styled.div`
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 15px;
    border: none;
    background: none;

    &::placeholder {
      color: rgba(0, 0, 0, .5);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50px;
    border: none;
    background: none;
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
