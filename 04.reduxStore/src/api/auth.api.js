import axios from 'axios';

export const loginFetch = async (userData) => {
  const { data } = await axios.post('https://api-habit.herokuapp.com/auth/login', userData);
  return data;
}

export const registartionFetch = async (userData) => {
  const { data } = await axios.post('https://api-habit.herokuapp.com/auth/registartion', userData);
  return data;
}