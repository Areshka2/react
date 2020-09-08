import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  const handleFocus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Render count: {renderCount.current}</h1>
      <h2>Prev state count: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} />
      <button className="btn btn-success" onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default App;
