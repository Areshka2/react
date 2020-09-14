import React from 'react';

const FieldContainer = ({ error, label, children }) => {

  return (
    <div className={error ? 'field-wrapper field-wrapper--error' : 'field-wrapper'}>
      <label>{label}</label><br />
      {children}
      {error && <div className="error__message">{error.message || "Invalid field"}</div>}
    </div>
  );
}

export default FieldContainer;