import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorList from './ErrorList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const e = React.createElement;

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

  return e(
    React.Fragment,
    null,
    [e(TodoForm, { key: 'form', onSubmit: handleOnSubmit, onError: handleOnError }),
      e(ErrorList, { key: 'errors', errors }),
      e(TodoList, {
        key: 'list', todos, onDelete: handleOnDelete, onDone: handleOnDone,
      })],
  );
}

export default Todos;
