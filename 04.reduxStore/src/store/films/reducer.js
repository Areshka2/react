const initialState = {
  filmsList: [],
}

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return {
        ...state,
        filmsList: [...state.filmsList, action.payload]
      }

    default:
      return state;

  }
}

export default filmReducer;