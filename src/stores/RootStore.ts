import StateStore from './StateStore';
import ExampleStore from './ExampleStore';
import ExampleApi from 'apis/ExampleApi';

export default class RootStore {
  stateStore: StateStore;
  exampleStore: ExampleStore;
}

export const createRootStore = (): RootStore => {
  const store = new RootStore();

  store.stateStore = new StateStore(store);
  store.exampleStore = new ExampleStore(store, new ExampleApi());

  return store;
};
