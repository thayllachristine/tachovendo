import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SunnyDay from './pages/SunnyDay';
import RainyDay from './pages/RainyDay';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sunnyday" component={SunnyDay} />
    <Route path="/rainyday" component={RainyDay} />
  </Switch>
);

export default withRouter(App);
