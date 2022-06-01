import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import TodoList from '../../../app/javascript/components/TodoList';

const e = React.createElement;

describe('<TodoList/>', () => {
  it('should render', () => {
    render(e(TodoList, {
      todos: [{ id: 32, text: 'Test', status: 'pending' }],
      onDone: jest.fn(),
      onDelete: jest.fn(),
    }));
    expect(prettyDOM()).toMatchSnapshot();
  });
});
