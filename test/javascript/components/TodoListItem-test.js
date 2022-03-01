import React from 'react';
import { shallow } from 'enzyme';

import TodoListItem from '../../../app/javascript/components/TodoListItem';

describe('<TodoListItem/>', () => {
  it('should render', () => {
    const wrapper = shallow(<TodoListItem id={32} status="pending" text="Test" onDone={jest.fn()} onDelete={jest.fn()} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should call onDone', () => {
    const handleOnDone = jest.fn();
    const wrapper = shallow(<TodoListItem id={32} status="pending" text="Test" onDone={handleOnDone} onDelete={jest.fn()} />);
    wrapper.find('button').props().onClick();
    expect(handleOnDone).toHaveBeenCalledWith(32);
  });

  it('should call onDelete', () => {
    const handleOnDelete = jest.fn();
    const wrapper = shallow(<TodoListItem id={32} status="done" text="Test" onDone={jest.fn()} onDelete={handleOnDelete} />);
    wrapper.find('button').props().onClick();
    expect(handleOnDelete).toHaveBeenCalledWith(32);
  });
});
