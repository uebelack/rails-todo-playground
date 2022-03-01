import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onDelete, onDone }) {
  return (<ul className="todo-list">
    {todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        status={todo.status}
        text={todo.text}
        onDelete={onDelete}
        onDone={onDone}
      />))}
  </ul>);
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TodoList;
