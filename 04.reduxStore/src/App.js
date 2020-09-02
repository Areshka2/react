import React, { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users';
import Films from './components/Films';
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
  const [page, setPage] = useState('users');
  const handleChangePage = () => {
    page === 'users' ? setPage('films') : setPage('users')
  }

  return (
    <Provider store={store}>
      <div className="App">
        {/* <button onClick={() => console.log(store.getState())}>Get Store</button> */}
        <button onClick={handleChangePage}>{page === "users" ? 'Show films' : 'Show users'}</button>
        {page === 'users' && < Users />}
        {page === 'films' && <Films />}
      </div>
    </Provider>
  );
}

export default App;
