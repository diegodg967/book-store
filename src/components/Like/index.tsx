import React, { HTMLAttributes } from 'react';
import { RiHeart3Line } from 'react-icons/ri';
import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isFavorite?: boolean;
}

const Like: React.FC<Props> =  ({ isFavorite, ...rest }) => (
  <Container isFavorite={isFavorite} { ...rest }>
    {isFavorite ? <RiHeart3Line size={20} color="#fff" /> : <RiHeart3Line size={20} color="#e83a53" />}
  </Container>
);

export default Like;