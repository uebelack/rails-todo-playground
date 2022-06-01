import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import ErrorList from '../../../app/javascript/components/ErrorList';

const e = React.createElement;

describe('<ErrorList/>', () => {
  it('should render without errors', () => {
    render(e(ErrorList));
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should render with errors', () => {
    render(e(ErrorList, { errors: ['error1', 'error2'] }));
    expect(prettyDOM()).toMatchSnapshot();
  });
});
