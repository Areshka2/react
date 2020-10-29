import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

function Test() {
  let history = useHistory();
  console.log(history)

  const { name } = useParams();

  function handleClick() {
    history.push("/home");
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <div>User {name}</div>
    </>
  )
}

export default Test;