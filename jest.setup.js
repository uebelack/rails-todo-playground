import enableHooks from 'jest-react-hooks-shallow';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

global.React = React;
enableHooks(jest);

configure({ adapter: new Adapter() });
