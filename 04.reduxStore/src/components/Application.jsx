import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Link, Redirect } from "react-router-dom";

import Users from './Users';
import Profile from './Profile';
import Auth from '../containers/Auth';
import { getAuthStatusSelector } from '../store/users/selectors';
import { logoutThunk } from '../store/users/thunks';
import PrivateRouter from './PrivateRouter';

const Application = () => {
  const isAuth = useSelector(getAuthStatusSelector);
  const dispatch = useDispatch();
  return (
    <>
      {
        isAuth ?
          (
            <>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/login">Login</Link>
                <button onClick={() => dispatch(logoutThunk())}>Logout</button>
              </nav>
              <Switch>
                <Route exact path="/" render={() => <h1>Hello</h1>} />
                {/* <Route path="/users" render={(props) => <Users {...props} name={'Vasya'} />} /> */}
                <PrivateRouter path="/users" accessRole="ADMIN">
                  <Users />
                </PrivateRouter>
                <Route path="/profile/:id" component={Profile} />
                {/* <Route path="*" render={(props) => <h1>404</h1>} /> */}
                <Redirect to="/" />
              </Switch>
            </>
          ) :
          <Auth />
      }
    </>
  );
}

export default Application;