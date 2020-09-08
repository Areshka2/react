import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Users from './components/Users';
import Films from './components/Films';
import store from './store/store'
import { Provider } from 'react-redux';
import Auth from './components/Auth';
// import A

function App() {
  // const [page, setPage] = useState('users');
  // const handleChangePage = () => {
  //   page === 'users' ? setPage('films') : setPage('users')
  // }

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
          <Route exact path="/" render={(props) => <h1>Hello</h1>} />
          <Route path="/users" render={(props) => <Users />} />
          <Route path="/login" render={(props) => <Auth />} />
          {/* <button onClick={() => console.log(store.getState())}>Get Store</button> */}
          {/* <button onClick={handleChangePage}>{page === "users" ? 'Show films' : 'Show users'}</button>
        {page === 'users' && < Users />}
        {page === 'films' && <Films />} */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
