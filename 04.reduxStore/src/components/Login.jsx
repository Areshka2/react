import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { loginThunk } from '../store/users/thunks'

const Login = () => {
  const dispatch = useDispatch()

  const [fieldsState, setFieldsState] = useState({
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
    dispatch(loginThunk(fieldsState))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
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
      <button type="submit">Login</button>
      <Link to='/registration'>Registration</Link>
    </form>
  )
}

export default Login;
