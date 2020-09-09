import React from 'react';
import { useState } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';

const initialState = {
  user: {
    username: "",
    password: ""
  },
  errors: {},
  submitted: false
}

const Login = () => {

  const [state, setState] = useState(initialState);

  const handleChange = e => {
    const { user } = state;
    user[e.target.name] = e.target.value;
    // state = 
    setState({ ...state, user })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      user: { username, password }
    } = state;

    let err = {};

    if (!username) {
      err.username = 'Enter your username!';
    }
    if (!password) {
      err.password = 'The enter password';
    } else if (password.length < 8 || password.length > 16) {
      err.password = 'The password must be at least 8 and no more than 16 characters!';
    }

    setState({ ...state, errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        setState({ ...state, submitted: true });
      }
    });
  }

  const {
    user: { username, password },
    errors,
    submitted
  } = state;
  console.log(state)
  return (
    <>
      {submitted ? (<p>Welcome onboard, {username}!</p>) :
        (
          <>
            <h3>Login!</h3>

            <FormInput
              label="Username"
              className="input"
              type="text"
              name="username"
              placeholder="Enter username..."
              value={username}
              onChange={handleChange}
              error={errors.username}
              required
            />

            <FormInput
              label="Password"
              className="input"
              name="password"
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <Button
              type="submit"
              title="Submit"
              className="button"
              handleClick={handleSubmit}
            />
          </>
        )
      }
    </>
  )
}

export default Login;