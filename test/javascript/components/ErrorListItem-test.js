import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import ErrorListItem from '../../../app/javascript/components/ErrorListItem';

describe('<ErrorListItem/>', () => {
  it('should render', () => {
    render(<ErrorListItem error="Test Error"/>);
    expect(prettyDOM()).toMatchSnapshot();
  });
});
