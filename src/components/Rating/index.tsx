import React, { useState, useEffect } from 'react';
import { useRating } from "../../hooks/rating";
import { Container } from './styles';

const stars = [1, 2, 3, 4, 5];

interface Props {
  bookId: string;
}

const Rating: React.FC<Props> = ({ bookId }) => {
  const { rating, toggleRating } = useRating();
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const index = rating.findIndex(item => item.id === bookId)
    if (index !== -1) setRate(rating[index].rate);
  }, []);

  const handleRate = (star: number) => {
    setRate(star);
    toggleRating({
      id: bookId,
      rate: star
    });
  }

  return (
    <Container>
      <ul>
        {stars.map(star => (
          <li
            key={star}
            className={rate + 1 > star ? 'active' : ''}
            onClick={() => handleRate(star)}
          />
        ))}
      </ul>
    </Container>
  )
};

export default Rating;