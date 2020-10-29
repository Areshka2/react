import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const styles = {
  ul: {
    margin: 0,
    padding: 0,   
    listStyle: "none",
  }
}

const ToDoList = ({todos}) => {
  return (
    <ul style={styles.ul}>
      { todos.map((todo, index) => <ToDoItem index={index} todo={todo} key={todo.id} />) }
    </ul>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoList;

