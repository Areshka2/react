import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsersThunk } from '../store/users/thunks';
import { getUserListSelector } from '../store/users/selectors';

const Users = () => {
  const users = useSelector(getUserListSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk());
  })

  return (
    <div>
      <h1>Users page</h1>
      <ul className="users__list">
        {
          users.map(user => {
            return (
              <li key={user._id}>
                <Link to={'/profile/' + user._id}>{user.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Users;
