#!/usr/bin/env node
const csv = require('csvtojson');
const mongoose = require('mongoose');
const Companies = require('../models/companies');
require('dotenv').config();

console.log('seeds 🙌');

// Connect to MongoDB
mongoose.connect(
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${
    process.env.MONGO_HOST
  }`
);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`mongodb seed connection opened`);
});

function insertRecordIntoDatabase(record) {
  // Insert into mongo

  const company = new Companies({
    category: record.category,
    subCategory: record.subCategory,
    company: record.company,
    websiteDomain: record.websiteDomain
  });
  // console.log(company);
  company.save(function(err, company) {
    if (err) return console.error(err);
    console.log(company);

    // console.log(record.category);
    // console.log(record.subCategory);
    // console.log(record.company);
    // console.log(record.websiteDomain);
  });
}

// Read the CSV File
const records = [];
const csvFilePath = './seeds/martech-landscape.csv';
csv()
  .fromFile(csvFilePath)
  .on('json', jsonObj => {
    // Pushes each CSV row to in memory array of records
    records.push(jsonObj);
  })
  .on('done', error => {
    console.log('end', error);

    // Insert JSON into Database
    records.forEach(record => insertRecordIntoDatabase(record));
    console.log('done inserting');
  });
