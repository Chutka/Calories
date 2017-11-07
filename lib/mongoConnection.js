var mongoose = require('mongoose');

var config = require('../config');

mongoose.connect(config.get('database: url'), function() {
  console.log('Connected');
});

module.exports = mongoose.connection;