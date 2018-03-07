const mongoose = require('mongoose');
const environment = require('../config/keys');
const { mongoUser, mongoHost, mongoPass } = environment;

module.exports = function () {
  if (process.env.NODE_ENV === 'production') {
    // Use Production Database
    mongoose
      .connect(`mongodb://${mongoUser}:${mongoPass}@${mongoHost}`)
      .catch(function (error) {
        console.log('Error connecting to Mongoose: ', error);
      });
  } else {
    // Use Development Database
    mongoose
      .connect(mongoHost)
      .catch(function (error) {
        console.log('Error connecting to Mongoose: ', error);
      });
  }
};
