import React from 'react';
import { getAuthStatusSelector } from '../store/users/selectors';
import { useSelector } from 'react-redux';
import Users from './Users';
import Auth from './Auth';


const Router = () => {
  const isAuth = useSelector(getAuthStatusSelector);
  return isAuth ? <Users /> : <Auth />
}

export default Router; 