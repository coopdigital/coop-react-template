import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Render', () => {
    const app = shallow(<App></App>);

    expect(app).toMatchSnapshot();
  });
});
