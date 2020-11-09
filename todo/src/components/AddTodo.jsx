import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    },
    clear: () => setValue(defaultValue),
    value: () => value
  }
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear()
    }
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={handlerSubmit}>
      <input type="text" {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo;