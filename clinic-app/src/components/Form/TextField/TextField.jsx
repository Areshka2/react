import React from 'react'

import cn from 'classname'
import PropTypes from 'prop-types'
import { Label, Input, FormGroup } from 'reactstrap'

import './TextField.scss'

const TextField = (
  {
    type,
    name,
    label,
    value,
    className,
    placeholder,
    ...props
  }
) => {

  const onChange = e => {
    const value = e.target.value
    const { name, onChange: cb } = props
    cb(name, value)
  }

  return (
    <FormGroup className={cn('text-field', className)}>
      {label ? (
        <Label className='text-field__label'>
          {label}
        </Label>
      ) : null}
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className='text-field__input'
        onChange={onChange}
      />
    </FormGroup>
  )
}

export default TextField;

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'textarea', 'email', 'password', 'date']),
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: function () { }
}