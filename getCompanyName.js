// getCompanyName.js
import request from './request';

export function getCompanyName(companyID) {
  return request('/companies/' + companyID).then(record => record.company);
}
