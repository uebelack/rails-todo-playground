import React from 'react';
import PropTypes from 'prop-types';

const statusButtonClassMapping = {
  pending: 'update-button',
  done: 'delete-button',
};

const statusButtonTextMapping = {
  pending: 'Done',
  done: 'Delete',
};

function TodoListItem({
  id, status, text, onDone, onDelete,
}) {
  const handleOnClick = () => {
    if (status === 'pending') {
      onDone(id);
    }

    if (status === 'done') {
      onDelete(id);
    }
  };

  return (
    <li className="todo-list-item">
      <span className={`todo-list-item-text ${status}`}>{text}</span>
      <span className={`todo-list-item-action ${status}`}>
        <button className={statusButtonClassMapping[status]} onClick={handleOnClick} role="button">
          {statusButtonTextMapping[status]}
        </button>
      </span>
    </li>);
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['pending', 'done']).isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TodoListItem;
