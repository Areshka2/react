import React, { useEffect, useState } from "react";
import Context from './context';
import ToDoList from "./components/ToDoList";
import Loader from './components/Loader'
import "./App.css";

const AddTodo = React.lazy(() => import('./components/AddTodo'))

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
    .then(response => response.json())
    .then(todos => {      
        setTodos(todos)
        setLoading(false)      
    });    
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (title) => {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title,
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>

      <React.Suspense fallback={() => <h1>Loading...</h1>}>
        <AddTodo onCreate={addTodo} />
      </React.Suspense>      

      {loading && <Loader />}
      {todos.length ? (
        <ToDoList todos={todos} onToggle={toggleTodo} /> 
      ) : (
        loading ? null : <p>No todos!!!</p>
      )}
    </div>
    </Context.Provider>
  );
}

export default App;
