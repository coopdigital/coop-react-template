import ExampleStore from './ExampleStore';

describe('ExampleStore', () => {
  let mockRootStore;
  beforeEach(() => {
    mockRootStore = {};
  });

  it('getQuote - Success', async () => {
    const mockApi = {
      getQuote: jest.fn(() => {
        return {
          success: true,
          data: {
            contents: {
              quotes: [
                {
                  quote: 'TEST_QUOTE',
                  author: 'TEST_AUTHOR'
                }
              ]
            }
          }
        };
      })
    };

    const exampleStore = new ExampleStore(mockRootStore, mockApi);

    await exampleStore.getNewQuote();

    expect(exampleStore.quote).toBe('TEST_QUOTE');
    expect(exampleStore.author).toBe('TEST_AUTHOR');
  });

  it('getQuote - Error', async () => {
    const mockApi = {
      getQuote: jest.fn(() => {
        return {
          success: false
        };
      })
    };

    const exampleStore = new ExampleStore(mockRootStore, mockApi);

    await exampleStore.getNewQuote();

    expect(exampleStore.quote).toBe(
      'If I have seen further than others, it is by standing upon the shoulders of giants.'
    );
    expect(exampleStore.author).toBe('Issac Newton');
  });
});
