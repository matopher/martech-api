const mongoose = require('mongoose');
const environment = require('../config');
const { mongoUser, mongoHost, mongoPass } = environment;

module.exports = function() {
  // MongoDB
  mongoose
    .connect(`mongodb://${mongoUser}:${mongoPass}@${mongoHost}`)
    .catch(function(error) {
      console.log('Error connecting to Mongoose: ', error);
    });
};
