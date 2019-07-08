import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';
import Search from './components/search';

const Routes = () => (
  <Switch>
    <Route path="/items/:id" component={Details} />
    <Route path="/items" component={Results} />
    <Route exact path="/" component={Search} />
    <Redirect from="*" exact to="/" />
  </Switch>
);

export default Routes;
