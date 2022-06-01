import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import TodoForm from '../../../app/javascript/components/TodoForm';

const e = React.createElement;

describe('<TodoForm/>', () => {
  it('should render', () => {
    render(e(TodoForm));
    expect(prettyDOM()).toMatchSnapshot();
  });
});
