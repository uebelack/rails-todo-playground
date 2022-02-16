import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

const e = React.createElement;

function TodoForm({ onSubmit, onError }) {
  const [fetching, setFetching] = useState(false);
  const input = React.useRef();

  const handleOnSubmit = async (values, actions) => {
    setFetching(true);
    try {
      await onSubmit(values);
      actions.resetForm({ text: '' });
    } catch (error) {
      onError(error.response.data.errors);
    } finally {
      setFetching(false);
      if (input.current) {
        input.current.focus();
      }
    }
  };

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  });

  return e(
    Formik,
    { initialValues: { text: '' }, onSubmit: handleOnSubmit },
    e(
      Form,
      { className: 'todo-form' },
      e(Field, {
        id: 'text',
        name: 'text',
        type: 'text',
        placeholder: 'Add new Todo',
        disabled: fetching,
        innerRef: input,
      }),
    ),
  );
}

PropTypes.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default TodoForm;