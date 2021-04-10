import React from 'react';

import Header from '../../components/Header';
import { GridContainer } from '../../styles/grid';
import { CategoryList } from './styles';

const CATEGORIES = [
  { title: 'Harry Potter' },
  { title: 'Stephen King' },
];

const Home: React.FC = () => {
  return (
    <>
      <Header title="Home" />
      <GridContainer>
        <CategoryList>
          <ul>
            {CATEGORIES.map(category => (
              <li key={category.title}>{category.title}</li>
            ))}
          </ul>
        </CategoryList>
      </GridContainer>
    </>
  );
};

export default Home;
