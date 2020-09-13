import React from 'react';
import { useAlert } from './AlertContext'

const Alert = () => {
  const { isShowAlert, hideAlert, text } = useAlert();

  console.log(isShowAlert)

  if (!isShowAlert) return null;

  return (
    <div className="alert alert-danger" role="alert" onClick={hideAlert}>
      <strong>{text}</strong>
    </div>
  )
}

export default Alert;