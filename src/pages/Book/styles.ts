import styled from 'styled-components';

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;

  & > div {
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 15px;

      img {
        margin-bottom: 10px;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, .3);
      }

      span {
        font-size: 14px;
        opacity: .6;
      }
    }

    &:nth-child(2) {
      flex: 1;

      & > div {
        display: flex;
        align-items: center;
        margin-top: 20px;

        div {
          margin-left: 15px;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Author = styled.span`
  font-size: 14px;
  opacity: .6;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const Buttons = styled.div`
  justify-content: flex-end;

  button + button {
    margin-left: 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 15px;
  background: #fff;
  line-height: 28px;
  color: #666;
`;

export const NoCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 180px;
  background: #e3dd00;
`;
