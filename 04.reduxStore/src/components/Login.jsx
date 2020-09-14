import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { loginThunk } from '../store/users/thunks'
import FieldContainer from './FieldContainer';

import { emailValidationData, passwordValidationData } from '../constants/formPatterns'

const Login = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const handleOnSubmit = data => {
    console.log(data);

    dispatch(loginThunk({
      email: data.email,
      password: data.password,
    }))
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <FieldContainer label='Email' error={errors.email}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          ref={register(emailValidationData)}
        />
      </FieldContainer>
      <FieldContainer label='Password' error={errors.password}>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          ref={register(passwordValidationData)}
        />
      </FieldContainer>
      <button type="submit">Login</button>
      <Link to='/registration'>Registration</Link>
    </form>
  )
}

export default Login;
