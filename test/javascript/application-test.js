import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../app/javascript/application';

jest.mock('react-dom');

const e = React.createElement;

describe('application', () => {
  it('should work', () => {
    const wrapper = shallow(e(App));
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
