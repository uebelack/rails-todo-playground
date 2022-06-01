import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import TodoForm from '../../../app/javascript/components/TodoForm';

describe('<TodoForm/>', () => {
  it('should render', () => {
    render(<TodoForm onSubmit={jest.fn()} onError={jest.fn()} />);
    expect(prettyDOM()).toMatchSnapshot();
  });
});
