// __tests__/user-test.js
jest.mock('../request');

import * as getName from '../getCompanyName';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return getName.getCompanyName(4).then(data => expect(data).toEqual('Drift'));
});
