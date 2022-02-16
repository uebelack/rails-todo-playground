import React from 'react';
import PropTypes from 'prop-types';

const e = React.createElement;

function ErrorListItem({ error }) {
  return e('li', { className: 'error-list-item' }, error);
}

ErrorListItem.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorListItem;
