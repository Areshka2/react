import React from 'react'

import cn from 'classname'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Label, FormGroup } from 'reactstrap'

import './DateField.scss'

const DateField = (
  {
    name,
    label,
    value,

    dateFormat,

    hasTime,
    timeFormat,
    timeInterval,

    onChange,
    className,
    placeholder,
    ...props
  }
) => {

  const onChange2 = (value) => {
    const { name, onChange: cb } = props
    cb(name, value)
  }

  return (
    <FormGroup className={cn('date-field', className)}>
      <div>
        {label ? (
          <Label className='date-field__label'>
            {label}
          </Label>
        ) : null}
        <DatePicker
          name={name}
          selected={value}

          dateFormat={dateFormat}

          timeFormat={timeFormat}
          showTimeSelect={hasTime}
          timeIntervals={timeInterval}

          onChange={onChange2}
          placeholderText={placeholder}
          className='date-field__input form-control'
        />
      </div>
    </FormGroup>
  )
}

export default DateField;

DateField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  hasTime: PropTypes.bool,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  timeInterval: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func
}

DateField.defaultProps = {
  hasTime: false,
  dateFormat: 'dd/MM/yyyy',
  // формат времени, отображающийся в выпадающем списке
  timeFormat: 'HH:mm',
  // шаг выбора времени 
  timeInterval: 30,
  onChange2: function () { }
}