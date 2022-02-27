import React from 'react';
import PropTypes from 'prop-types';
import htm from 'htm';
import TodoListItem from './TodoListItem';

const html = htm.bind(React.createElement);

function TodoList({ todos, onDelete, onDone }) {
  return html`
  <ul className="todo-list">
    ${todos.map((todo) => html`
      <${TodoListItem} 
        key="${todo.id}"
        id="${todo.id}"
        status="${todo.status}"
        text="${todo.text}"
        onDelete="${onDelete}"
        onDone="${onDone}"
      />`)}
  </ul>`;
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TodoList;
