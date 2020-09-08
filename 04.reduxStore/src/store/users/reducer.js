import ActionTypes from './actionTypes';

const createInitialState = () => {
  // const state = JSON.parse(localStorage.getItem('usersList'))
  // if (state) return state;
  return {
    curentUser: {
      auth: false,
      access_token: '',
    },
    usersList: [],
  }
}

const userReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      }
    // localStorage.setItem('usersList', JSON.stringify(state))

    case ActionTypes.GET_USERS:
      return {
        ...state,
        usersList: action.payload,
      }
    // localStorage.setItem('usersList', JSON.stringify(state))

    default:
      return state;
  }
}

export default userReducer;