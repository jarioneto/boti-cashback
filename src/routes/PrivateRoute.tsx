import React from 'react';

// Third party
import { Route, Redirect } from 'react-router-dom';

// Utils
import { hasAuthenticated } from 'utils/authentication';

type Props = {
  component: React.ComponentType;
  path: string;
  exact: boolean;
};

const PrivateRoute: React.FC<Props> = ({ component, path, exact }) => {
  const isAuthenticated = hasAuthenticated();

  return isAuthenticated ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
