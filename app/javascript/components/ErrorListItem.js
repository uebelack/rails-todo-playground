import React from 'react';
import PropTypes from 'prop-types';
import htm from 'htm';

const html = htm.bind(React.createElement);

function ErrorListItem({ error }) {
  return html`<li className="error-list-item">${error}</li>`;
}

ErrorListItem.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorListItem;
