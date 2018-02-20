// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const environment = require('./config');
const { port } = environment;
const connectMongoDB = require('./db/connect');

connectMongoDB();

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log('api is running on port ' + port);
