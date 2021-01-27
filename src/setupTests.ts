import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global._env_ = null;
