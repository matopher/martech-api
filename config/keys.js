if (process.env.NODE_ENV === 'production') {
  // Production: return prod keys
  module.exports = require('./prod');
} else {
  // Development: return dev keys
  module.exports = require('./dev');
  console.log('using dev keys');
}