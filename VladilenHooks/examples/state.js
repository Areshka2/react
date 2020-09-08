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
    setCounter(prevCounter => prevCounter + 1);
  }

  const counterDecrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={counterIncrement}>Add</button>
      <button className="btn btn-danger" onClick={counterDecrement}>Remove</button>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <button className="btn btn-warning" onClick={() => { setState({...state, title: 'new title' }) }}>Change</button>
    </div>
  );
}

export default App;
