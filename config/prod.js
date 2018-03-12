require('dotenv').config();

let ENV = {};

ENV.port = process.env.PORT || 3000;
ENV.mongoUser = process.env.MONGO_USER || `admin`;
ENV.mongoPass = process.env.MONGO_PASS || `password`;
ENV.mongoHost = process.env.MONGO_HOST || `ds111258.mlab.com:11258/matopher-restful-api`;

module.exports = ENV;
