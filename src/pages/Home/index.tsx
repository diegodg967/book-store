import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { GridContainer } from '../../styles/grid';
import { CategoryList } from './styles';

const CATEGORIES = [
  { id: 'harry-potter', title: 'Harry Potter' },
  { id: 'as-cronicas-de-gelo-e-fogo', title: 'As Crônicas de Gelo e Fogo' },
  { id: 'percy-jackson', title: 'Percy Jackson' },
  { id: 'senhor-dos-aneis', title: 'Senhor dos Anéis' },
  { id: 'sandman', title: 'Sandman' },
  { id: 'stephen-king', title: 'Stephen King' },
];

const Home: React.FC = () => {
  const history = useHistory();

  const handleCategory = (slug: string) => {
    history.push(`/list/${slug}`)
  }

  return (
    <>
      <Header title="Home" hasMenu />
      <GridContainer>
        <CategoryList>
          <ul>
            {CATEGORIES.map(category => (
              <li
                key={category.id}
                onClick={() => handleCategory(category.id)}
              >
                <div>
                  {category.title}
                </div>
              </li>
            ))}
          </ul>
        </CategoryList>
      </GridContainer>
    </>
  );
};

export default Home;
