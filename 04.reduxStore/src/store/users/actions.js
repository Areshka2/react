import ActionTypes from './actionTypes';

let id = 0;

export const addUserAction = (name) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      id: ++id,
      name,
      createDate: new Date().toUTCString()
    }
  }
}