import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registrationThunk } from '../store/users/thunks'

const Login = ({ handleChangePage }) => {
  const dispatch = useDispatch()
  
  const handleGetToReg = (e) => {
    e.preventDefault()
    handleChangePage(false)
  }

  return (
    <form>
      <input type="text" name="" placeholder="Enter name" />
      <input type="password" name="" placeholder="Enter password" />
      <button type="submit">Login</button>
      <a onClick={handleGetToReg}>Login</a>
    </form>
  )
}

const Registration = ({ handleChangePage }) => {
  const handleGetToLogin = (e) => {
    e.preventDefault()
    handleChangePage(true)
  }

  return (
    <form>
      <input type="text" name="" placeholder="Enter name" />
      <input type="email" name="" placeholder="Enter email" />
      <input type="password" name="" placeholder="Enter password" />
      <button type="submit">Registration</button>
      <a onClick={handleGetToLogin}>Registration</a>
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