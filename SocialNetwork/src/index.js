import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostDate, addNewMessage, updateMessageDate } from './redux/state';
import App from './App';
import state, { subscribe } from './redux/state'
import './index.css';


const renderReactDOM = () => {
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

renderReactDOM(state);

subscribe(renderReactDOM)


