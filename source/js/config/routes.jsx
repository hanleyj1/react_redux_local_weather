import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import Fiveday from 'views/Fiveday';
import NotFound from 'views/NotFound';

const publicPath = '/demos/weather/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  FIVEDAY: `${ publicPath }fiveday`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.FIVEDAY } component={ Fiveday } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
