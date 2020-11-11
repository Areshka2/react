import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Form = () => {
  const [value, setValue] = useState("");
  const { showAlert } = useContext(AlertContext);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      showAlert("Note add!!!", "success");
      setValue("");
    } else {
      showAlert("Enter note name");
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
