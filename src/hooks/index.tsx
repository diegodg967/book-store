import React from 'react';

import { FavoriteProvider } from './favorite';
import { RatingProvider } from './rating';

const AppProvider: React.FC = ({ children }) => (
  <FavoriteProvider>
    <RatingProvider>
      {children}
    </RatingProvider>
  </FavoriteProvider>
);

export default AppProvider;
