import React from 'react';
import {
  render, prettyDOM,
} from '@testing-library/react';

import App from '../../../app/javascript/components/App';

const e = React.createElement;

describe('application', () => {
  it('should work', () => {
    render(e(App));
    expect(prettyDOM()).toMatchSnapshot();
  });
});
