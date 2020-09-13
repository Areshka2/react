import React, { useContext, useReducer } from 'react';

const Context = React.createContext();

export const useAlert = () => useContext(Context);

const initialState = {
  isShowAlert: false
}

const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, isShowAlert: true, text: action.text }
    case HIDE_ALERT:
      return { ...state, isShowAlert: false }

    default: return state;
  }
}

const AlertProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const showAlert = text => dispatch({ type: SHOW_ALERT, text })
  const hideAlert = () => dispatch({ type: HIDE_ALERT })

  return (
    <Context.Provider value={{
      isShowAlert: state.isShowAlert,
      text: state.text,
      showAlert,
      hideAlert
    }}>
      {children}
    </Context.Provider>
  )
}

export default AlertProvider;