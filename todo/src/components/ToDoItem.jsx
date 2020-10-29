import React from 'react';
import PropTypes from 'prop-types';

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

const ToDoItem = ({ todo, index }) => {
  return (
    <li style={styles.li}>
      <span>
        <input style={styles.input} type="checkbox" name="" />
        {`${index + 1}. ${todo.title}`}
      </span>
      
      <button className="rm-todo">&times;</button>
    </li>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default ToDoItem;