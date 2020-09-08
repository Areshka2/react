import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostDate, addNewMessage, updateMessageDate } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderReactDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updatePostDate={updatePostDate}
          addNewMessage={addNewMessage}
          updateMessageDate={updateMessageDate}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderReactDOM;