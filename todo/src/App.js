import React, { useState } from "react";
import Context from './context';
import ToDoList from "./components/ToDoList";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: true, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
    { id: 4, completed: false, title: "Купить творог" },
  ]);  

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
      
      <AddTodo onCreate={addTodo} />

      {
        todos.length ? 
        <ToDoList todos={todos} onToggle={toggleTodo} /> :
        <p>No todos!!!</p>
      }
    </div>
    </Context.Provider>
  );
}

export default App;
