import React, { useContext } from 'react';
import { Context } from '../App';

export const Alert = () => {

  const isShowAlert = useContext(Context);
  console.log(isShowAlert)
  if (!isShowAlert) return null;

  return (
    <div className="alert alert-danger" role="alert">
      <strong>primary</strong>
    </div>
  )
}