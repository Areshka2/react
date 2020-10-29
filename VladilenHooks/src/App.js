import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Main from './components/Main';
import Alert from './components/Alert/Alert';
import AlertProvider from './components/Alert/AlertContext'

import './App.css';
import User from './components/User';

function App() {


  return (
    <>
      <AlertProvider>
        <div className={'container pt-3'}>

          <Alert />
          <Main toogleAlert={() => { }} />

        </div>

        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/user">user</Link>
          <Switch>
            <Route path="/home" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>about</h1>} />
            <Route path="/user" component={User} />
          </Switch>
        </Router>
      </AlertProvider>

    </>
  );
}

export default App;


