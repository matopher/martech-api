// Dependencies
const express = require('express');
const router = express.Router();

// Models
const Companies = require('../models/companies');

// Routes
Companies.methods(['get', 'put', 'post', 'delete']);
Companies.register(router, '/companies');

// Return router
module.exports = router;
