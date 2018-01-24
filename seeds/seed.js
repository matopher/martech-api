#!/usr/bin/env node
const csv = require('csvtojson');

console.log('seeds 🙌');

function insertRecordIntoDatabase(record) {
  console.log('handling record');
  // Insert into mongo
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
  });
