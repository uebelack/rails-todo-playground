import React from 'react';
import PropTypes from 'prop-types';

const e = React.createElement;

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

  return e('li', { className: 'todo-list-item' }, [
    e('span', { className: `todo-list-item-text ${status}`, key: 'text' }, text),
    e('span', { className: 'todo-list-item-action', key: 'action' }, e('button', { className: statusButtonClassMapping[status], onClick: handleOnClick }, statusButtonTextMapping[status])),
  ]);
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['pending', 'done']).isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TodoListItem;
