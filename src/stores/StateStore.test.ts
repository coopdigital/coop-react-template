import StateStore from './StateStore';

describe('StateStore', () => {
  let mockRootStore;
  beforeEach(() => {
    mockRootStore = {};
  });
  it('Inital State', () => {
    const stateStore = new StateStore(mockRootStore);

    expect(stateStore.state).toBe('initial');
  });
});
