import React from 'react';
import './style.scss';

const UserCard = ({ user }) => {
  const {
    name,
    address: {
      city, street, suite
    }
  } = user;

  return (
    <div className="user">
      <h5 className="user__fullname">
        {name || 'no name'}
      </h5>
      <p>Address: {` ${city}, ${street}, ${suite}`}</p>
    </div>
  );
}

export default UserCard