import React from 'react';
import PropTypes from 'prop-types';

function ErrorListItem({ error }) {
  return (<li className="error-list-item">{error}</li>);
}

ErrorListItem.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorListItem;
