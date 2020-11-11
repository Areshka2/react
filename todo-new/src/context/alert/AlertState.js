import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./AlertReducer";
import actionTypes from "./actionTypes";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const showAlert = (text, type = "warning") => {
    dispatch({
      type: actionTypes.SHOW_ALERT,
      payload: { text, type },
    });
  };

  const hideAlert = () => dispatch({ type: actionTypes.HIDE_ALERT });

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
