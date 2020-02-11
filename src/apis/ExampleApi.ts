import ApiCall from './ApiCall';
import Result from './Result';

export default class ExampleApi extends ApiCall {
  constructor() {
    super();
    this.url = 'http://quotes.rest/';
  }

  async getQuote(): Promise<Result> {
    return await this.apiCall('qod.json', 'GET');
  }
}
