import React, { useState, useEffect } from 'react';

import { GridContainer } from '../../styles/grid';

import Api from '../../services';

import { Book } from '../../types';

const List: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    Api.getBooks('harry')
      .then(response => {
        setBooks(response.items.map((book: any) => {
          return {
            title: book.volumeInfo.title,
          }
        }))
      });
  }, []);

  useEffect(() => {
    console.log('books', books);
  }, [books]);

  return (
    <>Test</>
  );
};

export default List;
