import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
  return (
    <li className={s.friend}>
      <div className={s.friend__avatar}></div>
      <p>{props.login}</p>
    </li>
  );
}

export default Friend;