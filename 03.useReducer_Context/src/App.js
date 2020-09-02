import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Users from './containers/Users';
import Posts from './containers/Posts/Posts';

const initialState = {
  // counter: 0,
  // names: [],
  users: []
}

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
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
        counter: state.users.length + 1
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

  useEffect(() => {
    setPage(window.location.pathname)
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
    <Context.Provider value={{ state, dispatch }}>
      <Header changePage={handleChangePage} />
      {/* <Counter /> */}
      {page === "/users" && <Users />}
      {page === "/posts" && <Posts />}
      {page === "/" && <h1>Welcome</h1>}
    </Context.Provider>
  );
}

export default App;
