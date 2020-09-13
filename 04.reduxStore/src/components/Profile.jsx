import React from 'react';
import { useSelector } from 'react-redux'
import { getUserListSelector } from '../store/users/selectors';

const Profile = ({ history }) => {
  const users = useSelector(getUserListSelector);
  const userName = () => {
    const id = history.location.pathname.replace('/profile/', '');
    const user = users.find(user => user._id === id);
    return user ? user.name : 'No name';
  }

  return (
    <>
      <h1>Profile page</h1>
      <p>Name: {userName()}</p>
    </>
  );
}

export default Profile;