import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'primary';
  buttonSize?: 'small' | 'normal';
  outlined?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 140px;
  height: 40px;
  padding: 0 25px;
  background: #5985ec;
  border: 0;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, .3);

  transition: all .2s;

  &:hover {
    background: #5078d4;
  }

  &:active {
    background: #476abd;
  }  
`;
