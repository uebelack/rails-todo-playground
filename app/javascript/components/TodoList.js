import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const e = React.createElement;

function TodoList({ todos, onDelete, onDone }) {
  return e(
    'ul',
    { className: 'todo-list' },
    todos.map((todo) => e(TodoListItem, {
      ...todo, key: todo.id, onDelete, onDone,
    })),
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TodoList;
