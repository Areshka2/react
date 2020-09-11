import React from 'react'

import cn from 'classname'
import PropTypes from 'prop-types'
import { Label, Input, FormGroup } from 'reactstrap'

import './CheckboxField.scss'

const CheckboxField = ({ label, value, className, ...props }) => {

  const onChange = e => {
    const value = e.target.checked
    const { name, onChange: cb } = props
    cb(name, value)
  }

  return (
    <FormGroup check className={cn('checkbox-field', className)}>
      <Label
        check
        onClick={this.onClick}
        className='checkbox-field__label'>
        <Input
          type='checkbox'
          value={value}
          onClick={onChange}
          className='checkbox-field__checkbox'
        />
        {label}
      </Label>
    </FormGroup>
  )
}

export default CheckboxField;

CheckboxField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
}

CheckboxField.defaultProps = {
  value: false,
  onChange: function () { }
}