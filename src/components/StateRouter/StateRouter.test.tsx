import React from 'react';
import { shallow } from 'enzyme';
import StateRouter from './index';

import useStores from 'hooks/useStores';
jest.mock('hooks/useStores');

describe('StateRouter', () => {
  it('Render inital State', () => {
    (useStores as jest.Mock).mockImplementation(() => {
      return {
        stateStore: {
          state: 'initial'
        }
      };
    });

    const stateRouter = shallow(<StateRouter />);

    expect(stateRouter).toMatchSnapshot();
  });
});
