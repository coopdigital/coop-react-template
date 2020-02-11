import { decorate, observable } from 'mobx';

class StateStore {
  rootStore;
  state;

  constructor(rootStore) {
    this.rootStore = rootStore;

    this.state = 'initial';
  }
}

decorate(StateStore, {
  state: observable
});

export default StateStore;
