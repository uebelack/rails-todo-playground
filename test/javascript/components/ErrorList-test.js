import React from 'react';
import { shallow } from 'enzyme';

import ErrorList from '../../../app/javascript/components/ErrorList';

describe('<ErrorList/>', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ErrorList/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render with errors', () => {
    const wrapper = shallow(<ErrorList errors={['error1', 'error2']}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
