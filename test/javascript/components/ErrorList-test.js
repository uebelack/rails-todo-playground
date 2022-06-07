import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import ErrorList from '../../../app/javascript/components/ErrorList';

describe('<ErrorList/>', () => {
  it('should render without errors', () => {
    render(<ErrorList/>);
    expect(prettyDOM()).toMatchSnapshot();
  });

  it('should render with errors', () => {
    render(<ErrorList errors={['error1', 'error2']}/>);
    expect(prettyDOM()).toMatchSnapshot();
  });
});
