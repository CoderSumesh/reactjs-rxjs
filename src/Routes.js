import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import UserList from './components/UserList';
import AjaxList from './components/AjaxList';
import Countdown from './components/Countdown';
import ScanReduce from './components/ScanReduce';

const Routes = () => (
  <Suspense fallback="loading">
    <Switch>
      <Redirect from="/" exact to="/list" />
      <Route path="/list" component={UserList} />
      <Route path="/ajax-list" component={AjaxList} />
      <Route path="/countdown" component={Countdown} />
      <Route path="/scan-reduce" component={ScanReduce} />
    </Switch>
  </Suspense>
);

export default Routes;
