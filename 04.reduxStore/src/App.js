import React from 'react';
import { Provider } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import store from './store/store'
import Router from './components/Router';
// import Auth from './components/Auth';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
        <div className="App">
          <Router />
          {/* <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
          <Route exact path="/" render={(props) => <h1>Hello</h1>} />
          <Route path="/users" render={(props) => <Users />} />
          <Route path="/login" render={(props) => <Auth />} /> */}
        </div>
      {/* </Router> */}
    </Provider>
  );
}

export default App;
