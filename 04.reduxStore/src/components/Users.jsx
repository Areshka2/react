import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../store/users/thunks';
// import { getUserListSelector } from '../store/users/selectors';

const Users = () => {
  // const state = useSelector(getUserListSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk());
  })

  return (
    <div>
      Users
    </div>
  );
}

export default Users;
