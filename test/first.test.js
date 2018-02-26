const request = require('request');

describe('GET /companies', function() {
  let response, results;
  beforeEach(function(done) {
    request(`http://localhost:3000/api/companies`, function(
      error,
      response,
      body
    ) {
      response = response;
      results = JSON.parse(body);
      done(error);
    });
  });
  it('should return a collection of companies', function() {
    expect(results.length).to.equal(5207);
  });
});
