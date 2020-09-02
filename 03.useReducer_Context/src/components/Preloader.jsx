import React from 'react';

const preloaderStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  background: 'white'
}

const Preloader = () => {
  return (
    <div style={preloaderStyles}>
      <img src="https://i.pinimg.com/originals/b9/59/91/b9599180dc4d1298ad0beb1b73730379.gif" alt="preloader" />
    </div>
  )
}

export default Preloader;