import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import Book from '../pages/Book';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list/:id" component={List} />
    <Route path="/book/:id" component={Book} />
  </Switch>
);

export default Routes;
