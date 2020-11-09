import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    marginBottom: '.5rem',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },

  input: {
    marginRight: '1rem'
  }
}

const ToDoItem = ({ todo, index, handleChange }) => {
  const { removeTodo } = useContext(Context)
  const classes = [];
  todo.completed && classes.push('done-todo')

  return (
    <li style={styles.li} >
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          onChange={() => handleChange(todo.id)}
          checked={todo.completed && "checked"}
          style={styles.input}
        />
        {`${index + 1}. ${todo.title}`}
      </span>

      <button className="rm-todo" onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleChange: PropTypes.func.isRequired
}

export default ToDoItem;