/* global _env_ */
let env;

try {
  env = _env_;
} catch (error) {
  // Use local config if global not found
  env = {
    EXAMPLE_API_URL: 'http://quotes.rest/',
  };
}

export default env;
