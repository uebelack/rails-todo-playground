import React from 'react';
import { shallow } from 'enzyme';

import ErrorListItem from '../../../app/javascript/components/ErrorListItem';

const e = React.createElement;

describe('<ErrorListItem/>', () => {
  it('should render', () => {
    const wrapper = shallow(e(ErrorListItem, { error: 'Test Error' }));
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
