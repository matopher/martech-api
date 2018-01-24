// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;

// MongoDB
mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${
      process.env.MONGO_HOST
    }`
  )
  .catch(function(error) {
    console.log('Error connecting to Mongoose');
  });

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log('api is running on port 3000');
