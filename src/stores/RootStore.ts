import StateStore from './StateStore';
import ExampleStore from './ExampleStore';
import ExampleApi from 'apis/ExampleApi';

export default class RootStore {
  stateStore: StateStore;
  exampleStore: ExampleStore;

  constructor() {
    this.stateStore = new StateStore(this);
    this.exampleStore = new ExampleStore(this, new ExampleApi());
  }
}

export const createRootStore = (): RootStore => {
  return new RootStore();
};
