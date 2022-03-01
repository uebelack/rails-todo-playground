import React from 'react';
import { shallow } from 'enzyme';

import ErrorListItem from '../../../app/javascript/components/ErrorListItem';

describe('<ErrorListItem/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ErrorListItem error="Test Error"/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
