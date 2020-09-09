import ActionTypes from './actionTypes';

let id = 0;

export const addUserAction = name => {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      id: ++id,
      name,
      createDate: new Date().toUTCString()
    }
  }
}

export const getUsersAction = users => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  }
}

export const loginAction = accessToken => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: accessToken,
  }
}

export const logoutAction = () => {
  return {
    type: ActionTypes.LOGOUT_USER
  }
} 