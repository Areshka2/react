import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  label,
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  children,
  ...props
}) => {

  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        id={name}
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && { border: 'solid 1px red' }}
      />
      {error && <div>{error}</div>}
    </div>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default FormInput;