import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import ErrorList from './ErrorList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function headers() {
  return {
    'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content,
    'Content-Type': 'application/json',
  };
}

function Todos() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState();

  const loadData = async () => {
    const response = await axios.get('/api/v1/todos');
    setTodos(response.data.todos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleOnSubmit = async (todo) => {
    setErrors();
    await axios.post('/api/v1/todos', todo, { headers: headers() });
    await loadData();
  };

  const handleOnError = async (nextErrors) => {
    setErrors(nextErrors);
  };

  const handleOnDone = async (id) => {
    await axios.patch(`/api/v1/todos/${id}`, { status: 'done' }, { headers: headers() });
    await loadData();
  };

  const handleOnDelete = async (id) => {
    await axios.delete(`/api/v1/todos/${id}`, { headers: headers() });
    await loadData();
  };

  return (
    <>
      <TodoForm onSubmit={handleOnSubmit} onError={handleOnError} />
      <ErrorList errors={errors} />
      <TodoList todos={todos} onDone={handleOnDone} onDelete={handleOnDelete} />
    </>
  );
}

export default Todos;
