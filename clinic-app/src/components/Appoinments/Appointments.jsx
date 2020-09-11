import React, { Component } from 'react'

import { map } from 'underscore'
import Moment from 'react-moment'

import Table from '../Table/Table'
import Header from '../Header/Header'

import { ReactComponent as Appointment } from '../../images/appointment.svg'

import { appointments as data } from '../../lib/MockData'

import './Appointments.scss'

const title = 'Приёмы'

const Appointments = () => {

  return (
    <div className='appointments'>
      <Header
        title={title}
        userName='Иванов Иван Иванович'
        className='appointments__header'
        renderIcon={() => (
          <Appointment className='header__icon' />
        )}
      />
      <div className='appointments__body'>
        <Table
          data={data}
          columns={[
            {
              dataField: 'date',
              text: 'Дата',
              headerStyle: {
                width: '200px'
              },
              formatter: (v, row) => {
                return (
                  <Moment date={v} format='DD.MM.YYYY HH.mm' />
                )
              }
            },
            {
              dataField: 'clientName',
              text: 'Клиент'
            },
            {
              dataField: 'status',
              text: 'Статус'
            },
            {
              dataField: 'holderName',
              text: 'Принимающий'
            },
            {
              dataField: 'compliences',
              text: 'Жалобы'
            },
            {
              dataField: 'diagnosis',
              text: 'Диагноз'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Appointments;