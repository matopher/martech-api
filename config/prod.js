require('dotenv').config();

let ENV = {};

ENV.port = process.env.PORT;
ENV.mongoUser = process.env.MONGO_USER;
ENV.mongoPass = process.env.MONGO_PASS;
ENV.mongoHost = process.env.MONGO_HOST;

module.exports = ENV;
