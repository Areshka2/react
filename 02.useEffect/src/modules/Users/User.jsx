import React from 'react';

const User = ({ user, removeUser }) => {
  return (
    <div className="card" onClick={() => removeUser(user.name)}>
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      {/* <p>Age: {user.age}</p> */}
    </div>
  )
}

export default User;