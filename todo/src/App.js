import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
    { id: 4, completed: false, title: "Купить творог" },
  ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
