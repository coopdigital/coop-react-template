import React from 'react';

import ExampleComponent from './index';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import useStores from 'hooks/useStores';
jest.mock('hooks/useStores');

describe('ExampleComponent', () => {
  it('Render - showAuthor = true', () => {
    (useStores as jest.Mock).mockImplementation(() => {
      return {
        exampleStore: {
          quote: 'TEST_QUOTE',
          author: 'TEST_AUTHOR',
        },
      };
    });

    const exampleComponent = shallow(<ExampleComponent showAuthor={true} />);

    expect(exampleComponent).toMatchSnapshot();
  });

  it('Render - showAuthor = false', () => {
    (useStores as jest.Mock).mockImplementation(() => {
      return {
        exampleStore: {
          quote: 'TEST_QUOTE',
          author: 'TEST_AUTHOR',
        },
      };
    });

    const exampleComponent = shallow(<ExampleComponent showAuthor={false} />);

    expect(exampleComponent).toMatchSnapshot();
  });

  it('useEffect', () => {
    const getQuoteMock = jest.fn();

    (useStores as jest.Mock).mockImplementation(() => {
      return {
        exampleStore: {
          getNewQuote: getQuoteMock,
        },
      };
    });

    act(() => {
      mount(<ExampleComponent showAuthor={true} />);
    });

    expect(getQuoteMock.mock.calls.length).toBe(1);
  });
});
