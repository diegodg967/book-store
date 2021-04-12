import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'primary';
  buttonSize?: 'small' | 'normal';
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> =  ({ children, buttonStyle, buttonSize, ...rest }) => (
  <ButtonContainer type="button" buttonStyle={ buttonStyle } buttonSize={buttonSize} { ...rest }>
    { children }
  </ButtonContainer>
);

export default Button;