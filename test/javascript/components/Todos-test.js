import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import Todos from '../../../app/javascript/components/Todos';

jest.mock('axios');

describe('<Todos/>', () => {
  it('should render', async () => {
    axios.get.mockResolvedValue({ data: { todos: [{ id: 21, text: 'Test' }] } });
    const wrapper = await shallow(<Todos/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should handleOnSubmit', async () => {
    axios.get.mockResolvedValue({ data: { todos: [] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    const wrapper = await shallow(<Todos/>);
    wrapper.find('TodoForm').props().onSubmit({ text: 'Test' });
    expect(axios.post).toBeCalledWith('/api/v1/todos', { text: 'Test' }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });

  it('should handleErrors', async () => {
    axios.get.mockResolvedValue({ data: { todos: [] } });
    const wrapper = await shallow(<Todos/>);
    wrapper.find('TodoForm').props().onError(['Error 1', 'Error 2']);
  });

  it('should handleOnDone', async () => {
    axios.get.mockResolvedValue({ data: { todos: [] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    const wrapper = await shallow(<Todos/>);
    wrapper.find('TodoList').props().onDone(43);
    expect(axios.patch).toBeCalledWith('/api/v1/todos/43', { status: 'done' }, { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });

  it('should handleOnDelete', async () => {
    axios.get.mockResolvedValue({ data: { todos: [] } });
    document.head.querySelector = () => ({ content: 'csrf-token-abcd' });

    const wrapper = await shallow(<Todos/>);
    wrapper.find('TodoList').props().onDelete(43);
    expect(axios.delete).toBeCalledWith('/api/v1/todos/43', { headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': 'csrf-token-abcd' } });
  });
});
