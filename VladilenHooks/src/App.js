import React from 'react';

import Main from './components/Main';
import Alert from './components/Alert/Alert';
import AlertProvider from './components/Alert/AlertContext'

import './App.css';

function App() {
 
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toogleAlert={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
