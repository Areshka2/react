import React from 'react';
import Select from '../Select';
import { useState } from 'react';

const TestComponent = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [fieldsState, setFieldsState] = useState({
    ingridient: '',
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setFieldsState({
      ...fieldsState,
      [name]: value,
    })
  }
  console.log(fieldsState)

  return (
    <form>
      <Select
        name={"ingridient"}
        size={1}
        options={options}
        onChange={handleChange}
      />
    </form>
  )
}

export default TestComponent;