import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../../../app/javascript/components/TodoList';

describe('<TodoList/>', () => {
  it('should render', () => {
    const wrapper = shallow(<TodoList
      todos={[{ id: 32, text: 'Test', status: 'pending' }]}
      onDone={jest.fn()}
      onDelete={jest.fn()}
    />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
