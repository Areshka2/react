import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserSelector } from '../store/users/selectors';

const PrivateRouter = ({ accessRole, children, path }) => {
  const currentUser = useSelector(getCurrentUserSelector);
  return currentUser.role === accessRole ? <Route path={path} render={() => children} /> : <Redirect to="/" />
}

export default PrivateRouter;