import React from 'react';

const FieldContainer = ({ error, label, message, children }) => {
  return (
    <div className="field-wrapper">
      <label>{label}</label><br />
      {children}
      {error && <div>{error.message || "Invalid field"}</div>}
    </div>
  );
}

export default FieldContainer;