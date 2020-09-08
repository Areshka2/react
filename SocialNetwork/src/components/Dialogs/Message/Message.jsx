import React from 'react';
import s from './Message.module.css';

const MessageItem = (props) => {
  const classUserMessage = props.name === 'I' ? 'message--right' : 'message--left';  

  return (
    <div className={s.message + " " + s[classUserMessage]}>{props.message}</div>
  );
}

export default MessageItem;