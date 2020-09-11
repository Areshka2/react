import React, { useState } from 'react';

import { Main } from './components/Main';
import { Alert } from './components/Alert';

import './App.css';

export const Context = React.createContext()

function App() {
  const [isShowAlert, setIsShowAlert] = useState(false);

  const toogleAlert = () => {
    setIsShowAlert(!isShowAlert)
  }

  return (
    <Context.Provider value={isShowAlert}>
      <div className={'container pt-3'}>
        <Alert />
        <Main toogleAlert={toogleAlert} />
      </div>
    </Context.Provider>
  );
}

export default App;
