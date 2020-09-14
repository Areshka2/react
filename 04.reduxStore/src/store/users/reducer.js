import ActionTypes from './actionTypes';

const createInitialState = () => {
  // const state = JSON.parse(localStorage.getItem('usersList'))
  // if (state) return state;
  return {
    currentUser: {
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

    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        currentUser: {
          auth: true,
          access_token: action.payload,
          role: 'ADMIN',
        }
      }

    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        currentUser: {
          auth: false,
          access_token: '',
        }
      }

    case "ADD_HABITS":
      return {
        ...state,
        habits: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;