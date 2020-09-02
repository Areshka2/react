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
      <img src="https://miro.medium.com/max/978/0*mv8MNRLDNNnt5f72.gif" alt="preloader" />
    </div>
  )
}

export default Preloader;