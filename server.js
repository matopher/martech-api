// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
mongoose
	.connect(
		'mongodb://matt:password@ds111258.mlab.com:11258/matopher-restful-api'
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
app.listen(3000);
console.log('api is running on port 3000');
