import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { RemoteComponentLoader } from './RemoteComponentLoader';

export const Routes = () => (
  <Switch>
    <Route path='/things-to-do' render={() => <RemoteComponentLoader componentName= 'ThingsToDo' />} />
    <Route path='/places-to-stay' render={() => <RemoteComponentLoader componentName='PlacesToStay' />} />
    <Route path='/' component={Main} />
  </Switch>
);
