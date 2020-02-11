import React from 'react';
import { mount } from 'enzyme';
import StoreProvider from '.';
import useStores from 'hooks/useStores';
jest.mock('stores/RootStore');

const MockComponent: React.FC = () => {
  useStores();

  return <div>TEST_CONTENT</div>;
};

describe('StoreProvider', () => {
  it('Render', () => {
    const storeProvider = mount(
      <StoreProvider>
        <MockComponent />
      </StoreProvider>
    );

    expect(storeProvider).toMatchSnapshot();
  });

  it('Render without StoreProvider', () => {
    expect(() => {
      mount(<MockComponent />);
    }).toThrow(Error);
  });
});
