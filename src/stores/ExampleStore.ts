import { makeObservable, observable, action, runInAction } from 'mobx';
import Store from './Store';
import RootStore from './RootStore';
import ExampleApi from 'apis/ExampleApi';

class ExampleStore extends Store {
  exampleApi: ExampleApi = null;
  quote = '';
  author = '';

  constructor(rootStore: RootStore, exampleApi: ExampleApi) {
    super(rootStore);
    this.exampleApi = exampleApi;
    makeObservable(this, {
      quote: observable,
      author: observable,
      getNewQuote: action,
    });
  }

  async getNewQuote(): Promise<void> {
    const result = await this.exampleApi.getQuote();

    runInAction(() => {
      if (result.success) {
        this.quote = result.data.contents.quotes[0].quote;
        this.author = result.data.contents.quotes[0].author;
      } else {
        this.quote =
          'If I have seen further than others, it is by standing upon the shoulders of giants.';
        this.author = 'Issac Newton';
      }
    });
  }
}

export default ExampleStore;
