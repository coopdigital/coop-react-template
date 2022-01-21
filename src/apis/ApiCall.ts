import Result from 'models/Result';

export default class ApiCall {
  url: string;

  constructor() {
    this.url = '';
  }

  protected async apiCall(
    method: string,
    operation = 'GET',
    body = null
  ): Promise<Result> {
    const result = new Result();
    let url = null;

    try {
      let fetchOptions;
      if (body != null) {
        fetchOptions = {
          method: operation,
          body: JSON.stringify(body),
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
        };
      } else {
        fetchOptions = { method: operation };
      }

      url = `${this.url}${method}`;

      const response = await fetch(url, fetchOptions);

      let data = null;

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      if (response.body !== null) {
        try {
          data = await response.json();
        } catch (err) {
          // Non JSON body
        }
      }

      result.success = true;
      result.data = data;
    } catch (err) {
      result.success = false;
      result.error = err.message;
    }
    return result;
  }
}
