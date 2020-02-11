import React from 'react';
import ExamplePage from './index';
import { shallow } from 'enzyme';

describe('ExamplePage', () => {
  it('Render', () => {
    const examplePage = shallow(<ExamplePage />);

    expect(examplePage).toMatchSnapshot();
  });
});
