#!/usr/bin/env node
const csv = require('csvtojson');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Companies = require('../models/companies');
const connectMongoDB = require('../db/connect');

console.log('seeds 🙌');

connectMongoDB();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`mongodb seed connection opened`);
});

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function insertRecordIntoDatabase(record) {
  // Insert into mongo
  const company = new Companies({
    category: record.category,
    subCategory: record.subCategory,
    company: record.company,
    websiteDomain: record.websiteDomain
  });
  await company.save(function(err, company) {
    if (err) return console.error(err);
    console.log(company);
  });
}

async function loadData() {
  const records = [];
  const csvFilePath = './seeds/martech-landscape.csv';
  try {
    await csv()
      .fromFile(csvFilePath)
      .on('json', jsonObj => {
        // Pushes each CSV row to in memory array of records
        records.push(jsonObj);
      })
      .on('done', error => {
        console.log('end', error);

        // Insert JSON into Database
        const insertAll = async () => {
          await asyncForEach(records, async record => {
            await insertRecordIntoDatabase(record);
          });
        };
        insertAll();
        // records.forEach(record => insertRecordIntoDatabase(record));
      })
      .on('done', error => {
        console.log('ALL DONE NOW');
      });
  } catch (e) {
    console.log(e);
    process.exit();
  }
  // Read the CSV File
}

async function deleteData() {
  console.log('😢😢 Goodbye Data...');
  await Companies.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t npm run seeds\n\n');
  process.exit();
}

if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
