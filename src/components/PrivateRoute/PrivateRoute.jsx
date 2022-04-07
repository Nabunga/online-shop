import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, cart, ...rest }) => (
  <Route
    {...rest}
    render={props => (cart.length === 0) ? <Redirect to="/" /> : <Component {...props} />}
  />
);
export default PrivateRoute;