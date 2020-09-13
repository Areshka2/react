import React from 'react';
import { useAlert } from './Alert/AlertContext'

const Main = () => {

  const { showAlert } = useAlert()

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button
        className="btn btn-success"
        onClick={() => showAlert('This is alert')}
      >
        Показать alert
      </button>
    </>
  )
}

export default Main;