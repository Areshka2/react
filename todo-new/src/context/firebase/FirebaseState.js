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
  };

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  );
};
