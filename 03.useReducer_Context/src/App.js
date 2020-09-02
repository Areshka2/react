import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './containers/Users';
import { getUsers } from './api/users.service';
import Posts from './containers/Posts/Posts';
import { getPosts } from './api/posts.service';

const themes = {
  light: {
    background: '#f1f3f8',
    color: '#393b44',
  },

  dark: {
    background: '#393b44',
    color: '#f1f3f8',
  }
}

const initialState = {
  // counter: 0,
  // names: [],
  users: [],
  posts: [],
  theme: {
    type: 'light',
    themes
  }
}

console.log(initialState)

export const Context = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    // case 'ADD':
    //   return {
    //     ...state,
    //     counter: state.counter + 1
    //   }
    // case 'MINUS':
    //   if (state.counter < 2) {
    //     return { ...state, counter: 1 }
    //   }
    //   return {
    //     ...state,
    //     counter: state.counter - 1
    //   }
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        counter: state.users.length + 1
      }
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: {
          ...state.theme,
          type: state.theme.type === 'light' ? 'dark' : 'light'
        }
      }
    default:
      return state
  }
}

// const Counter = () => { 
//   const [formState, setFormState] = useState('');

//   useEffect(() => console.log(state), [state]);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     dispatch({
//       type: "ADD_USER",
//       payload: formState
//     })
//     setFormState('');
//   }

//   const handleChange = (e) => {
//     const { name: key, value } = e.target;
//     setFormState({
//       ...formState,
//       [key]: value
//     })
//   }

//   return (
//     <>
//       <h1>{state.counter}</h1>
//       <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
//       <button onClick={() => dispatch({ type: 'MINUS' })}>minus</button>
//       {state.users.map((user, i) => <div key={i}>{user.name + " " + user.age}</div>)}
//       <form onSubmit={handleOnSubmit}>
//         Name: <input onChange={handleChange} type="text" name="name" value={formState.name || ''} />
//         Age: <input onChange={handleChange} type="text" name="age" value={formState.age || ''} />
//         <button type='submit'>Add name</button>
//       </form>
//     </>
//   );
// }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState('/');
  const [isShowPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setPage(window.location.pathname)
  }, []);

  useEffect(() => {
    getUsers()
      .then(users => {
        dispatch({
          type: "GET_USERS",
          payload: users,
        });
        setShowPreloader(false)
      })
      .catch(e => console.error(e));

    getPosts()
      .then(posts => {
        dispatch({
          type: "GET_POSTS",
          payload: posts,
        });
        setShowPreloader(false)
      })
      .catch(e => console.error(e))

  }, [])

  const handleChangePage = (path) => {
    switch (path) {
      case '/users':
        setPage('/users')
        break;
      case '/posts':
        setPage('/posts')
        break;
      default:
        setPage('/')
        break;
    }
  }

  return (
    <Context.Provider value={{ state, dispatch, isShowPreloader }}>
      <Header changePage={handleChangePage} />
      {/* <Counter /> */}
      {page === "/users" && <Users />}
      {page === "/posts" && <Posts />}
      {page === "/" && <h1>Welcome</h1>}
    </Context.Provider>
  );
}

export default App;
