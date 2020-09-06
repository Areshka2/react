import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
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
          render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
        <Route path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />} />
      </main>
    </div>
  );
}

export default App;
