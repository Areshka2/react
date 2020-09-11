import React from 'react';


export const Main = ({ toogleAlert }) => {

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button
        className="btn btn-success"
        onClick={toogleAlert}
      >
        Показать alert
      </button>
    </>
  )
}