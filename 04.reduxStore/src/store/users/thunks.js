import { getUsersFetch } from '../../api/user.api';
import { loginFetch, registrationFetch, habitsFetch } from '../../api/auth.api';
import { getUsersAction, loginAction, logoutAction } from './actions';

export const getUsersThunk = () => {
  return async (dispatch, getState) => {
    const users = await getUsersFetch()
    dispatch(getUsersAction(users))
  }
}

export const registrationThunk = (userData) => {
  return async () => {
    await registrationFetch(userData)
  }
}

export const loginThunk = (userData) => {
  return async (dispatch) => {
    const { access_token } = await loginFetch(userData);
    localStorage.setItem('access_token', access_token);
    dispatch(loginAction(access_token))
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch(logoutAction())
  }
}

export const habitsThunk = () => {
  return async (dispatch) => {
    const habits = await habitsFetch();
    dispatch({ type: 'ADD_HABITS', payload: habits })
  }
}

export const initThunk = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return dispatch(logoutThunk())
      }
      dispatch(loginAction(token))
      dispatch(habitsThunk())
    } catch (e) {

    }
  }
} 