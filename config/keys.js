if (process.env.NODE_ENV === 'production') {
  //We are in production
  module.exports = require('./prod');
} else {
  //we are in development
  module.exports = require('./dev');
}
