import React, { useState } from 'react'

import Moment from 'react-moment'

import Table from '../Table/Table'
import Header from '../Header/Header'
import TextField from '../Form/TextField/TextField'
import DateField from '../Form/DateField/DateField'
import CheckboxField from '../Form/CheckboxField/CheckboxField'

import { ReactComponent as Appointment } from '../../images/appointment.svg'

import { appointments as data } from '../../lib/MockData'

import './Appointments.scss'

const title = 'Приёмы'

const user = 'Иванов Иван Иванович'

const Appointments = () => {
  const initialState = {
    filter: {
      startDate: null,
      endDate: null,
      clientName: '',
      onlyMe: false
    }
  }

  const [state, setState] = useState(initialState);


  const onChangeFilterField = (name, value) => {
    const { filter } = state

    setState({
      filter: { ...filter, ...{ [name]: value } }
    })
  }

  const onChangeFilterDateField = (name, value) => {
    const { filter } = state

    setState({
      filter: { ...filter, ...{ [name]: value && value.getTime() } }
    })
  }

  const {
    startDate,
    endDate,
    clientName,
    onlyMe,
  } = state.filter

  let filtered = filter(data, o => {
    return (startDate ? o.date >= startDate : true) &&
      (endDate ? o.date <= endDate : true) &&
      (clientName ? (clientName.length > 2 ? o.clientName.includes(clientName) : true) : true) &&
      (onlyMe ? o.holderName === USER : true)
  })


  return (
    <div className='appointments'>
      <Header
        title={title}
        userName={user}
        className='appointments__header'
        bodyClassName='appointments__header-body'
        renderIcon={() => (
          <Appointment className='header__icon' />
        )}
      />
      <div className='appointments__body'>
        <div className='appointments-filter'>
          <Form className='appointments-filter-form'>
            <DateField
              hasTime
              name='startDate'
              value={startDate}
              dateFormat='dd/MM/yyyy HH:mm'
              timeFormat='HH:mm'
              placeholder='С'
              className='appointments-filter-field'
              onChange={onChangeFilterDateField}
            />
            <DateField
              hasTime
              name='endDate'
              value={endDate}
              dateFormat='dd/MM/yyyy HH:mm'
              timeFormat='HH:mm'
              placeholder='По'
              className='appointments-filter-field'
              onChange={onChangeFilterDateField}
            />
            <TextField
              name='clientName'
              value={clientName}
              placeholder='Клиент'
              className='appointments-filter-field'
              onChange={onChangeFilterField}
            />
            <CheckboxField
              name='onlyMe'
              label='Только я'
              value={onlyMe}
              className='appointments-filter-field'
              onChange={onChangeFilterField}
            />
          </Form>
        </div>
        <Table
          data={filtered}
          className='apointment__list'
          columns={[
            {
              dataField: 'date',
              text: 'Дата',
              headerStyle: {
                width: '150px'
              },
              formatter: (v, row) => {
                return (
                  <Moment date={v} format='DD.MM.YYYY HH.mm' />
                )
              }
            },
            {
              dataField: 'clientName',
              text: 'Клиент',
              headerStyle: {
                width: '300px'
              }
            },
            {
              dataField: 'status',
              text: 'Статус'
            },
            {
              dataField: 'holderName',
              text: 'Принимающий',
              headerStyle: {
                width: '300px'
              }
            },
            {
              dataField: 'compliences',
              text: 'Жалобы',
              headerStyle: {
                width: '200px'
              }
            },
            {
              dataField: 'diagnosis',
              text: 'Диагноз',
              headerStyle: {
                width: '200px'
              }
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Appointments;