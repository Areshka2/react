import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import actionTypes from "./actionTypes";
import { API_CONFIG } from "../../config/api.config";

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: actionTypes.SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const { data } = await axios.get(`${API_CONFIG.baseUrl}/notes.json`);
    console.log(data);
    const payload = Object.keys(data).map((key) => {
      return { ...data[key], id: key };
    });

    dispatch({ type: actionTypes.GET_NOTES, payload });    
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    const { data } = await axios.post(`${API_CONFIG.baseUrl}/notes.json`, note);
    dispatch({ type: actionTypes.ADD_NOTE, payload: data });
    console.log("addNote", data);
  };

  const removeNote = async (id) => {
    await axios.delete(`${API_CONFIG.baseUrl}/notes/${id}.json`);

    dispatch({
      type: actionTypes.REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
