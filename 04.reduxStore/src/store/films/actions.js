import ActionTypes from './actionTypes';

let id = 0;

export const addFilmAction = (nameFilm) => {
  return {
    type: ActionTypes.ADD_FILM,
    payload: {
      id: ++id,
      nameFilm,
      createDate: new Date().toUTCString()
    }
  }
}