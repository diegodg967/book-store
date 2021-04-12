import React, { createContext, useCallback, useContext, useState } from "react";

interface Rate {
  id: string;    
  rate: number;
}

interface RatingContextData {
  rating: Rate[];
  toggleRating(rate: Rate): void;
}

const RatingContext = createContext<RatingContextData>(
  {} as RatingContextData
);

const RatingProvider: React.FC = ({ children }) => {
  const [rating, setRating] = useState<Rate[]>([]);

  const toggleRating = useCallback((rate: Rate) => {
    const index = rating.findIndex((item: Rate) => item.id === rate.id);
    const update = [...rating];
    if (index === -1) {
      update.push(rate);
    } else {
      update.splice(index, 1);
    }
    setRating(update);
  }, []);

  return (
    <RatingContext.Provider value={{ rating, toggleRating }}>
      {children}
    </RatingContext.Provider>
  );
};

function useRating(): RatingContextData {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error("useRating must be used within a RatingProvider");
  }

  return context;
}

export { RatingProvider, useRating };
