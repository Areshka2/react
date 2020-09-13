import React, { useState } from 'react';

export const Context = React.createContext({});

const Router = ({ children }) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  return (
    <Context.Provider value={{ pathName, setPathName }}>
      {children}
    </Context.Provider>
  );
}

export default Router;