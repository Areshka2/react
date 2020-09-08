import { getUsersFetch } from '../../api/user.api';
import { loginFetch, registartionFetch } from '../../api/auth.api';
import { getUsersAction } from './actions';

export const getUsersThunk = () => {
  return async (dispatch, getState) => {
    const users = await getUsersFetch()
    dispatch(getUsersAction(users))
  }
}

export const registrationThunk = (userData) => {
  return async () => {
    await registartionFetch(userData)
  }
}
