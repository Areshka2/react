import React from 'react'

const Link = ({ onClick, path, children }) => {

  const handleClick = e => {
    e.preventDefault();
    window.history.pushState(null, null, path)
    onClick && onClick()
  }

  return (
    <a href="/" onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link