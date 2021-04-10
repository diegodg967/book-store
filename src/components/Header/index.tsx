import React from 'react';

import { FiMenu, FiSearch } from 'react-icons/fi';

import { Container, Icon } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => (
  <Container>
    <div>
      <Icon>
        <FiMenu size={22} />
      </Icon>
    </div>
    <div>
      <h1>{title}</h1>
    </div>
    <div>
      <Icon>
        <FiSearch size={22} />
      </Icon>
    </div>
  </Container>
);

export default Header;
