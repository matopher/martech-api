#!/usr/bin/env node
const csv = require('csvtojson');
const mongoose = require('mongoose');
const Companies = require('../models/companies');

console.log('seeds 🙌');

function insertRecordIntoDatabase(record) {
  // Insert into mongo
  const company = new Companies({ record });
  console.log(company);
  company.save(function(err, company) {
    if (err) return console.error(err);
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
