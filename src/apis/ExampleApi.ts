import ApiCall from './ApiCall';
import Result from 'models/Result';
import Environment from 'Environment';

export default class ExampleApi extends ApiCall {
  constructor() {
    super();
    this.url = Environment.EXAMPLE_API_URL;
  }

  async getQuote(): Promise<Result> {
    return await this.apiCall('qod.json', 'GET');
  }
}
