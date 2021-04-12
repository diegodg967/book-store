import React, { createContext, useCallback, useContext, useState } from "react";

interface FavoriteContextData {
  favorite: string[];
  toggleFavorite(id: string): void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favorite, setFavorite] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    const index = favorite.findIndex(item => item === id);
    const update = [...favorite];
    if (index === -1) {
      update.push(id);
    } else {
      update.splice(index, 1);
    }
    setFavorite(update);
  }, [favorite]);

  return (
    <FavoriteContext.Provider value={{ favorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }

  return context;
}

export { FavoriteProvider, useFavorite };
