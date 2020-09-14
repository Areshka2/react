import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { registrationThunk } from '../store/users/thunks'

const Registration = () => {
  const dispatch = useDispatch();

  const [fieldsState, setFieldsState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFieldsState({
      ...fieldsState,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationThunk(fieldsState))
  }

  return (
    <form onChange={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChangeInput}
        />
      </div>
      <button type="submit">Registration</button>
      <Link to='/login'>Login</Link>
    </form>
  )
}

export default Registration;
