import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction } from '../store/users/actions';
import { usersStateSelector, getUserListSelector } from '../store/users/selectors';

const Users = () => {
  const [name, setName] = useState('');
  const state = useSelector(getUserListSelector);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUserAction(name))
  }

  console.log('Users ', state)

  return (
    <div>
      Users
      <form onSubmit={handleSubmit}>
        <input onChange={e => setName(e.target.value)} type="text" name='name' />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default Users;
