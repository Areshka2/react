import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { loginThunk } from '../store/users/thunks'

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          ref={emailRef}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          ref={passwordRef}
        />
      </div>
      <button type="submit">Login</button>
      <Link to='/registration'>Registration</Link>
    </form>
  )
}

export default Login;
