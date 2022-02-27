import React from 'react';
import PropTypes from 'prop-types';
import htm from 'htm';

import ErrorListItem from './ErrorListItem';

const html = htm.bind(React.createElement);

function ErrorList({ errors }) {
  return errors ? html`
    <ul className="error-list">
      ${errors.map((error) => html`<${ErrorListItem} key="${error}" error="${error}"/>`)}
    </ul>` : null;
}

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

ErrorList.defaultProps = {
  errors: undefined,
};

export default ErrorList;
