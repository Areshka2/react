import React, { useState } from 'react';
import './App.css';

const computeInitialCounter = () => {
  console.log('Some calc...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  })

  const counterIncrement = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1); так не увеличит на 2

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1); // а так увеличит
  }

  const counterDecrement = () => {
    setCounter(counter - 1);
  }

  const updateTitle = () => {
    setState({ ...state, title: 'new title' })
  }

  // ИЛИ 

  // const updateTitle = () => {
  //   setState((prev) => {
  //     return {
  //       ...prev,
  //       title: 'new title'
  //     }
  //   })
  // }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={counterIncrement}>Add</button>
      <button className="btn btn-danger" onClick={counterDecrement}>Remove</button>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <button className="btn btn-warning" onClick={updateTitle}>Change</button>
    </div>
  );
}

export default App;
