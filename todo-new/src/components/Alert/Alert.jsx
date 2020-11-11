import React, { useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }

  return (
    <div
      className={`alert alert-${
        alert.type || "warning"
      } alert-dismissible fade show mt-3`}
      role="alert"
    >
      <strong>Attention!</strong> {alert.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hideAlert}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
