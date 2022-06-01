import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

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
      input.current.focus();
    }
  };

  useEffect(() => {
    input.current.focus();
  });

  return (
    <Formik initialValues={{ text: '' }} onSubmit={handleOnSubmit} role="form">
      <Form className="todo-form" data-testid="todo-form">
        <Field
          id="text"
          name="text"
          type="text"
          placeholder="Add new Todo"
          disabled={fetching}
          innerRef={input}
          data-testid="todo-form-input"
        />
      </Form>
    </Formik>);
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default TodoForm;
