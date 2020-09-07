import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostDate } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderReactDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostDate={updatePostDate} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderReactDOM;