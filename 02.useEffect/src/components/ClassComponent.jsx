import React, { useState, useEffect } from 'react';

const ClassComponent = () => {
  const [screen, setScreen] = useState(0);
  const [screen2, setScreen2] = useState(1);

  useEffect(() => {
    const changeScreen = () => {
      console.log(window.innerWidth)
      setScreen(window.innerWidth)
    };
    window.addEventListener('resize', changeScreen);
    return () => window.removeEventListener('resize', changeScreen)
  }, [])

  const handleClick = () => setScreen(screen + 1);
  const handleClick2 = () => setScreen2(screen2 + 1);

  return (
    <>
      <div>{screen > 600 ? 'Desktop' : 'Mobile'}</div>
      <div onClick={handleClick}>Screen1: {screen}</div>
      <div onClick={handleClick2}>Screen2: {screen2}</div>
    </>
  )
}

export default ClassComponent;