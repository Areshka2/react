import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { registrationThunk } from '../store/users/thunks'

const Registration = () => {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationThunk({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }))
  }

  return (
    <form onChange={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          ref={nameRef}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
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
      <button type="submit">Registration</button>
      <Link to='/login'>Login</Link>
    </form>
  )
}

export default Registration;
