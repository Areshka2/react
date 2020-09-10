import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clear type')
    }
  }, [type])

  const handlerMouseMove = (e) => {
    setPos({
      ...pos,
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', handlerMouseMove)

    return () => { window.removeEventListener('mousemove', handlerMouseMove) }
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button className="btn btn-success" onClick={() => setType('users')}>Users</button>
      <button className="btn btn-danger" onClick={() => setType('todos')}>Todos</button>
      <button className="btn btn-primary" onClick={() => setType('posts')}>Posts</button>

      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

    </div>
  );
}

export default App;
