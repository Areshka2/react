import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import store from './store/store';

// import Link from './components/Router/Link';
// import Route from './components/Router/Route';
// import Router from './components/Router/Router';
// import Redirect from './components/Router/Redirect';

import Auth from './components/Auth';
import Users from './components/Users';
import Profile from './components/Profile';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Switch>
            <Route exact path="/" render={(props) => <h1>Hello</h1>} />
            <Route path="/users" render={(props) => <Users {...props} name={'Vasya'} />} />
            <Route path="/login" component={Auth} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="*" render={(props) => <h1>404</h1>} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
