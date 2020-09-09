import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk, loginThunk } from '../store/users/thunks'

const Login = ({ handleChangePage }) => {
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

  const handleGetToReg = (e) => {
    e.preventDefault()
    handleChangePage(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        onChange={handleChangeInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChangeInput}
      />
      <button type="submit">Login</button>
      <a href="/#" onClick={handleGetToReg}>Registration</a>
    </form>
  )
}

const Registration = ({ handleChangePage }) => {
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

  const handleGetToLogin = (e) => {
    e.preventDefault()
    handleChangePage(true)
  }

  return (
    <form onChange={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter name"
        onChange={handleChangeInput}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChangeInput}
      />
      <input
        type="password"
        name=""
        placeholder="Enter password"
        onChange={handleChangeInput}
      />
      <button type="submit">Registration</button>
      <a href="/#" onClick={handleGetToLogin}>Login</a>
    </form>
  )
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const handleChangePage = type => setIsLogin(type)
  return isLogin ?
    <Login handleChangePage={handleChangePage} /> :
    <Registration handleChangePage={handleChangePage} />
}

export default Auth;