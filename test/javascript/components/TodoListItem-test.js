import React from 'react';
import { render, prettyDOM, screen } from '@testing-library/react';

import TodoListItem from '../../../app/javascript/components/TodoListItem';

describe('<TodoListItem/>', () => {
  it('should render', () => {
    render(<TodoListItem id={32} status="pending" text="Test" onDone={jest.fn()} onDelete={jest.fn()} />);
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should call onDone', () => {
    const handleOnDone = jest.fn();
    render(<TodoListItem id={32} status="pending" text="Test" onDone={handleOnDone} onDelete={jest.fn()} />);
    screen.getByRole('button').click();
    expect(handleOnDone).toHaveBeenCalledWith(32);
  });

  it('should call onDelete', () => {
    const handleOnDelete = jest.fn();
    render(<TodoListItem id={32} status="done" text="Test" onDone={jest.fn()} onDelete={handleOnDelete} />);
    screen.getByRole('button').click();
    expect(handleOnDelete).toHaveBeenCalledWith(32);
  });
});
