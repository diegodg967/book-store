import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import Api from '../../services';
import Button from '../../components/Button';
import Like from '../../components/Like';
import Rating from '../../components/Rating';
import { GridContainer } from '../../styles/grid';
import { MainInfo, Title, Author, Price, Buttons, Description, NoCover } from './styles';
import { useFavorite } from "../../hooks/favorite";
import { FiBook } from 'react-icons/fi';
import { Book } from '../../types';

interface Props {
  id: string;
}

const BookDetails: React.FC<RouteComponentProps<Props, any, Book>> = (props) => {
  const { favorite, toggleFavorite } = useFavorite();
  const [book, setBook] = useState<Book>();
  const [isFavorite, setIsfavorite] = useState(false);

  useEffect(() => {
    handleFavorite();
    const book = props.location.state;
    book ? setBook(book) : fetchBook();
  }, [favorite, book])

  const handleFavorite = () => {
    const index = favorite.findIndex(item => item === book?.id)
    index === -1 ? setIsfavorite(false) : setIsfavorite(true);
  }

  const fetchBook = async () => {
    const response = await Api.getBook(props.match.params.id)
    console.log('response', response)
    setBook({
      id: response.id,
      title: response.volumeInfo.title,
      description: response.volumeInfo.description ? response.volumeInfo.description : '',
      cover: response.volumeInfo.imageLinks ? response.volumeInfo.imageLinks.thumbnail : '',
      author: response.volumeInfo.authors ? response.volumeInfo.authors[0] : null,
      pageCount: response.volumeInfo.pageCount ? response.volumeInfo.pageCount : null,
    });
  }

  return (
    <>
      <Header title="Book" />
      <GridContainer direction="column">
        <MainInfo>
          <div>
            {book?.cover ?
              <img src={book.cover} alt={book?.title} /> :
              <NoCover>
                <FiBook size={26} />
              </NoCover>
            }
            {book?.pageCount && <span>{book?.pageCount} pages</span>}
          </div>
          <div>
            <Title>{book?.title}</Title>
            {book?.author && <Author>by {book?.author}</Author>}
            <div>
              <Price>$9.99</Price>
              {book && <Rating bookId={book.id} />}
            </div>
            <Buttons>
              <Button>Buy</Button>
              {book && <Like isFavorite={isFavorite} onClick={() => toggleFavorite(book.id)}></Like>}
            </Buttons>
          </div>        
        </MainInfo>
      </GridContainer>
      <GridContainer flex={1} isFull background="#fff">
        <GridContainer flex={1}>
          <Description>
            {book?.description}
          </Description>
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default BookDetails;
