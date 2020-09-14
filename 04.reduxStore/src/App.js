import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import store from './store/store';
import Application from './components/Application'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Application />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
