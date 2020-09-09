import React from 'react';

const Option = ({ value, label }) => {
  return (
    <option value={value}>{label}</option>
  )
}

const Select = ({
  name,
  size,
  onChange,
  options
}) => {
  const optionList = options.map((option, i) =>
    <Option key={"option" + i} value={option.value} label={option.label} />)

  return (
    <select
      name={name}
      size={size}
      onChange={onChange}
    >
      {optionList}
    </select>
  );
}

export default Select;