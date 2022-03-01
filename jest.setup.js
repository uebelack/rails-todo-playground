import enableHooks from 'jest-react-hooks-shallow';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enableHooks(jest);

configure({ adapter: new Adapter() });
