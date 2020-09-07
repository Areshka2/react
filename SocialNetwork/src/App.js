import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <aside className="aside">
        <Navbar />
        <Friends state={props.state.sidebar} />
      </aside>

      <main className="main-content">
        <Route path="/profile"
          render={() =>
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}
              updatePostDate={props.updatePostDate}
            />}
        />
        <Route path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />} />
      </main>
    </div>
  );
}

export default App;
