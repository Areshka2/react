import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const complexComputed = (num) => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black',
  }), [colored])

  const computed = useMemo(() => {
    return complexComputed(number)
  }, [number])

  useEffect(() => {
    console.log('Style change');
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Delete</button>
      <button className="btn btn-warning" onClick={() => setColored(!colored)}>Change color</button>
    </div>
  );
}

export default App;
