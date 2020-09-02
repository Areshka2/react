import React, { useState } from 'react';
import Users from './modules/Users';
import Films from './modules/Films';
import ClassComponent from './components/ClassComponent';
import './App.css';
import Main from './components/Main';
import Alert from './components/Alert';

export const AlertContext = React.createContext()

function App() {
  const [page, setPage] = useState('users');
  const [alert, setAlert] = useState(false)

  const handleSetPage = () => {
    page === 'users' ? setPage('films') : setPage('users')
  }

  return (
    <AlertContext.Provider value={alert}>
      <div className='container'>
        <Alert />
        <Main />
        <button onClick={handleSetPage}>Show {page === "users" ? "films" : "users"}</button>
        {page === "users" && <Users />}
        {page === "films" && <Films />}
        <ClassComponent />
      </div>
    </AlertContext.Provider>
  );
}

export default App;
