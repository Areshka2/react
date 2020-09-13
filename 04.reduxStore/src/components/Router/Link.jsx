import React, { useContext } from 'react';
import { Context } from './Router';

const Link = ({ to, children, className }) => {
  const { setPathName } = useContext(Context);

  const handleChangeRoute = (e) => {
    e.preventDefault();
    setPathName(to);
    window.history.pushState(null, null, to);
  }

  return (
    <a href='/' className={className} onClick={handleChangeRoute}>{children}</a>
  )
}

export default Link;