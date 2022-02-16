import React from 'react';
import { shallow } from 'enzyme';

import ErrorList from '../../../app/javascript/components/ErrorList';

const e = React.createElement;

describe('<ErrorList/>', () => {
  it('should render without errors', () => {
    const wrapper = shallow(e(ErrorList));
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render with errors', () => {
    const wrapper = shallow(e(ErrorList, { errors: ['error1', 'error2'] }));
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
