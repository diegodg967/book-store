import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import Api from '../../services';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { GridContainer } from '../../styles/grid';
import { BookList, NoCover } from './styles';
import { FiBook } from 'react-icons/fi';
import { Book } from '../../types';
interface Props {
  id: string;
}

const List: React.FC<RouteComponentProps<Props>> = (props) => {
  const history = useHistory();
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState('');
  const [startSearchIndex, setStartSearchIndex] = useState(0);

  useEffect(() => {
    setQuery(props.match.params.id)
  }, []);

  useEffect(() => {
    getBooks();
  }, [query]);

  useEffect(() => {
    console.log('books', books);
  }, [books]);

  const getBooks = async () => {
    if (query === '') return;
    const response = await Api.getBooks(query, startSearchIndex);
    setBooks([
      ...books,
      ...response.items.map((book: any) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          description: book.volumeInfo.description ? book.volumeInfo.description : '',
          cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
          author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : null,
          pageCount: book.volumeInfo.pageCount ? book.volumeInfo.pageCount : null,
        }
      })
    ]);
    setStartSearchIndex(startSearchIndex + 10);
  }

  const searchBooks = (query: string) => {
    setBooks([]);
    setStartSearchIndex(0);
    setQuery(query);
  }

  const resetBooks = () => {
    setBooks([]);
    setStartSearchIndex(0);
    setQuery(props.match.params.id);
  }

  const handleDetails = (book: Book) => {
    history.push(`/book/${book.id}`, book)
  }

  return (
    <>
      <Header
        title="List"
        hasSearch
        searchCallback={searchBooks}
        closeCallback={resetBooks}
      />
      <GridContainer>
        <BookList>
          <ul>
            {books.map(book => (
              <li
                key={book.id}
                onClick={() => handleDetails(book)}
              >
                {book.cover ?
                  <img src={book.cover} /> :
                  <NoCover>
                    <FiBook size={26} />
                    <span>{book.title}</span>
                  </NoCover>
                }
              </li>
            ))}
          </ul>
          <Button onClick={getBooks}>Load more</Button>
        </BookList>
      </GridContainer>
    </>
  );
};

export default List;
