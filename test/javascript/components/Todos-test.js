import React from 'react';
import {
  render, prettyDOM, fireEvent, screen, act,
} from '@testing-library/react';
import axios from 'axios';

import Todos from '../../../app/javascript/components/Todos';

jest.mock('axios');

describe('<Todos/>', () => {
  it('should render', async () => {
    axios.get.mockResolvedValue({ data: { todos: [{ id: 21, text: 'Test', status: 'pending' }] } });
    await act(async () => {
      await render(<Todos/>);
    });
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should handleOnSubmit', async () => {
    axios.get.mockResolvedValue({ data: { todos: [] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });
    await act(async () => {
      await render(<Todos/>);
    });

    await act(async () => {
      await fireEvent.change(screen.getByTestId('todo-form-input'), { target: { value: 'Test Todo' } });
      await fireEvent.submit(screen.getByTestId('todo-form'));
    });

    expect(axios.post).toBeCalledWith('/api/v1/todos', { text: 'Test Todo' }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });

  it('should handleErrors', async () => {
    const error = new Error('Test Error');
    error.response = { data: { errors: ['Error 1', 'Error 2'] } };
    axios.get.mockResolvedValue({ data: { todos: [] } });
    axios.post.mockImplementation(() => { throw error; });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    await act(async () => {
      await render(<Todos/>);
    });

    await act(async () => {
      await fireEvent.change(screen.getByTestId('todo-form-input'), { target: { value: 'Test Todo' } });
      await fireEvent.submit(screen.getByTestId('todo-form'));
    });

    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should handleOnDone', async () => {
    axios.get.mockResolvedValue({ data: { todos: [{ id: 21, text: 'Test', status: 'pending' }] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    await act(async () => {
      await render(<Todos/>);
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(axios.patch).toBeCalledWith('/api/v1/todos/21', { status: 'done' }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });

  it('should handleOnDelete', async () => {
    axios.get.mockResolvedValue({ data: { todos: [{ id: 21, text: 'Test', status: 'done' }] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    await act(async () => {
      await render(<Todos/>);
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(axios.delete).toBeCalledWith('/api/v1/todos/21', { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });
});
