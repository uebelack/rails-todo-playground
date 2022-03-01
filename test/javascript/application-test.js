import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../app/javascript/application';

jest.mock('react-dom');

describe('application', () => {
  it('should work', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
