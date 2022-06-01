import React from 'react';
import { render, prettyDOM } from '@testing-library/react';

import ErrorListItem from '../../../app/javascript/components/ErrorListItem';

const e = React.createElement;

describe('<ErrorListItem/>', () => {
  it('should render', () => {
    render(e(ErrorListItem, { error: 'Test Error' }));
    expect(prettyDOM()).toMatchSnapshot();
  });
});
