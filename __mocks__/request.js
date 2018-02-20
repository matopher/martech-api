// __mocks__/request.js
const companies = {
  4: { company: 'Drift' },
  5: { company: 'Zoom' }
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const companyID = parseInt(url.substr('/companies/'.length), 10);
    process.nextTick(
      () =>
        companies[companyID]
          ? resolve(companies[companyID])
          : reject({
              error: 'Company with ' + companyID + ' not found.'
            })
    );
  });
}
