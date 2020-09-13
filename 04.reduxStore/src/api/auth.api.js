import axios from 'axios';
import store from '../store/store';
import { logoutThunk } from '../store/users/thunks';

axios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: localStorage.getItem('access_token'),
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(logoutThunk())
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const loginFetch = async userData => {
  const { data } = await axios.post('https://api-habit.herokuapp.com/auth/login', userData);
  return data;
}

export const registrationFetch = async userData => {
  const { data } = await axios.post('https://api-habit.herokuapp.com/auth/registration', userData);
  return data;
}

export const habitsFetch = async () => {
  const { data } = await axios.get('https://api-habit.herokuapp.com/habits');
  return data;
}