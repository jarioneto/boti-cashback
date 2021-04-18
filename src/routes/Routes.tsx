import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
