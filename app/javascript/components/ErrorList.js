import React from 'react';
import PropTypes from 'prop-types';
import ErrorListItem from './ErrorListItem';

const e = React.createElement;

function ErrorList({ errors }) {
  return errors ? e(
    'ul',
    { className: 'error-list' },
    errors.map((error) => e(ErrorListItem, { key: error, error })),
  ) : null;
}

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

ErrorList.defaultProps = {
  errors: undefined,
};

export default ErrorList;
