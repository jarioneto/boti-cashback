import React, { Suspense } from 'react';

// Third party
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Loader from 'components/Loader';
import PrivateRoute from './PrivateRoute';

const Home = React.lazy(() => import('pages/Home'));
const Orders = React.lazy(() => import('pages/Orders'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/orders" exact component={Orders} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
