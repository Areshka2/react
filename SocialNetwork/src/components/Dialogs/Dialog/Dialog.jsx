import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.login}`;

  return (
    <li className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.login}</NavLink>
    </li>
  );
}

export default DialogItem;