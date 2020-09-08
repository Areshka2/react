import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialog/Dialog';
import MessageItem from './Message/Message';

const Dialogs = (props) => {
  console.log(props)
  // window.state = props.state

  let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} login={d.name} />);
  let messagesElements = props.state.messages.map(m => <MessageItem key={m.id} message={m.message} name={m.name} />);

  let newMessageElement = React.createRef();

  const addMessage = (e) => {
    e.preventDefault();
    props.addNewMessage()
  }

  const handleMessageChange = () => {
    props.updateMessageDate(newMessageElement.current.value)
  }

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogs__list}>
        {dialogsElements}
      </ul>
      <div className={s.messages}>
        {messagesElements}
        <form className={s.form_message}>
          <textarea
            className={s.send_message}
            ref={newMessageElement}
            value={props.state.newMessageText}
            onChange={handleMessageChange}
          />
          <button className={s.btn_send} type="submit" onClick={addMessage}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Dialogs;