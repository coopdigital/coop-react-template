import { decorate, observable } from 'mobx';
import RootStore from './RootStore';
import Store from './Store';

class StateStore extends Store {
  state;

  constructor(rootStore: RootStore) {
    super(rootStore);
    this.state = 'initial';
  }
}

decorate(StateStore, {
  state: observable
});

export default StateStore;
