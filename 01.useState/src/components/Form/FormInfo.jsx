import React from 'react';
import './Form.css';

const FormInfo = ({ user }) => {
  // console.log(user)
  return (
    <>
      <p>Name: {user.name}</p>    
    </>
  );
}

export default FormInfo;