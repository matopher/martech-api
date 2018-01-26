// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const companySchema = new mongoose.Schema({
  category: String,
  subCategory: String,
  company: String,
  websiteDomain: String
});

// Return model
module.exports = restful.model('Companies', companySchema);
