const request = require('request');

describe('GET /companies', function () {
  let response, results;
  beforeEach(function (done) {
    request(`http://localhost:3000/api/companies`, function (
      error,
      response,
      body
    ) {
      response = response;
      results = JSON.parse(body);
      done(error);
    });
  });
  it('should return a collection of 10 companies', function () {
    expect(results.length).to.equal(10);
  });
  it('should return an inital item of 140 Proof', function () {
    expect(results[0].company).to.contain('140 Proof');
  });
  it('should return an inital item with a category of "Advertising & Promotion"', function () {
    expect(results[0].category).to.contain('Advertising & Promotion');
  });
  it('should return an inital item with a sub-category of "Mobile Marketing"', function () {
    expect(results[0].subCategory).to.contain('Mobile Marketing');
  });
  it('should return an inital item with a website domain of "140proof.com"', function () {
    expect(results[0].websiteDomain).to.contain('140proof.com');
  });
});