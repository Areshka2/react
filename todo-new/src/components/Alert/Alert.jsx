import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../../context/alert/alertContext";

const CustomCSSTransition = ({ children, ...props }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      timeout={{
        enter: 700,
        exit: 500,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
      {...props}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  return (
    <CustomCSSTransition in={alert.visible}>
      <div
        className={`alert alert-${
          alert.type || "warning"
        } alert-dismissible mt-3`}
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
    </CustomCSSTransition>
  );
};

export default Alert;
