import actionTypes from "./actionTypes";

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };

    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state, action.payload],
      };

    case actionTypes.REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};
