import React, {Component} from 'react';

import { map } from 'underscore';

import Header from '../Header';

import { ReactComponent as User } from '../../images/user.svg'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Nurse } from '../../images/nurse.svg'
import { ReactComponent as House } from '../../images/house.svg'
import { ReactComponent as Clients } from '../../images/clients.svg'
import { ReactComponent as Messages } from '../../images/messages.svg'
import { ReactComponent as Broadcast } from '../../images/broadcast.svg'
import { ReactComponent as Employees } from '../../images/employees.svg'
import { ReactComponent as Appointment } from '../../images/appointment.svg'

import './Home.scss';

const title = 'Домашняя';

const sections = [
  { title: 'Приёмы', href: '/appointments', Icon: Appointment },
  { title: 'События', href: '/events', Icon: Star },
  { title: 'Оповещения', href: '/notifications', Icon: Broadcast },
  { title: 'Сообщения', href: '/messages', Icon: Messages },
  { title: 'Клиенты', href: '/clients', Icon: Clients },
  { title: 'Сотрудники', href: '/employees', Icon: Employees }
];

const Home = () => {
  return (
    <div className='home'>
      <Header
        title={title}
        userName='Иванов Иван Иванович'
        className='home__header'
        renderIcon={() => (
          <House className='header__icon' />
        )}
      />
      <div className='home__body'>
        <div className='section-navigation'>
          {map(sections, ({ title, href, Icon }) => (
            <a className='section-navigation__item section' href={href}>
              <Icon className='section__icon' />
              <span className='section__title'>{title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
