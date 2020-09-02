import React from 'react';

const Form = ({user, handleSetUser }) => {
  return (
    <form>
      <label htmlFor="userName">Name: </label>
      <input
        type="text"
        id="userName"
        placeholder="Enter name"
        value={user.name}
        onChange={(e) => { handleSetUser('name', e.target.value) }}
      />
    </form>
  )
}

export default Form;