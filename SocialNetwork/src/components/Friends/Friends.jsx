import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend';

const Friends = (props) => {
  const friendItems = props.state.friends.map(f => <Friend key={f.id} login={f.name} />)

  return (
    <div className={s.friends}>
      <h2 className={s.friends__title}>Friends</h2>
      <ul className={s.friends__list}>
        {friendItems}
      </ul>
    </div>
  );
}

export default Friends;