import ActionTypes from './actionTypes';

const createInitialState = () => {
  // const state = JSON.parse(localStorage.getItem('usersList'))
  // if (state) return state;
  return {
    curentUser: {},
    usersList: [],
  }
}

const userReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      const newState = {
        ...state,
        usersList: [...state.usersList, action.payload]
      }
      // localStorage.setItem('usersList', JSON.stringify(state))
      return newState;
    default:
      return state;
  }
}

export default userReducer;