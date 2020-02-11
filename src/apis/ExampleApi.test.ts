import fetchMock from 'fetch-mock';
import ExampleApi from './ExampleApi';

describe('ExampleApi', () => {
  it('getQuote', async () => {
    const testData = {
      body: JSON.stringify({
        contents: {
          quotes: [
            {
              quote: 'Stop complaining. Start creating.',
              author: 'Dale Patridge'
            }
          ]
        }
      })
    };
    fetchMock.get('*', testData);

    const exampleApi = new ExampleApi();

    const response = await exampleApi.getQuote();
    expect(response.success).toEqual(true);
    expect(response.data).toMatchSnapshot();

    fetchMock.reset();
  });

  it('handle fetch http errors', async () => {
    const testData = {
      body: JSON.stringify({ Message: 'Bad Response' }),
      status: 404
    };
    fetchMock.get('*', testData);

    const exampleApi = new ExampleApi();

    const response = await exampleApi.getQuote();
    expect(response.success).toEqual(false);
    expect(response.error).toEqual('404');

    fetchMock.reset();
  });
});
