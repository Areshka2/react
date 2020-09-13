import React from 'react';
import { Provider } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import store from './store/store';

import Link from './components/Router/Link';
import Route from './components/Router/Route';
import Router from './components/Router/Router';
import Redirect from './components/Router/Redirect';

import Users from './components/Users';
import Auth from './components/Auth';
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
          </nav>
          <Route path="/" component={<h1>Hello</h1>} />
          <Route path="/users" component={<Users />} />
          <Route path="/login" component={<Auth />} />
          {/* <Redirect to="/" /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
