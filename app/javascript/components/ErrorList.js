import React from 'react';
import PropTypes from 'prop-types';

import ErrorListItem from './ErrorListItem';

function ErrorList({ errors }) {
  return errors ? (<ul className="error-list">
      {errors.map((error) => <ErrorListItem key={error} error={error}/>)}
    </ul>) : null;
}

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

ErrorList.defaultProps = {
  errors: undefined,
};

export default ErrorList;
