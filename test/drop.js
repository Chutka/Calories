var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get('database:url'));

var db = mongoose.connection;

db.dropDatabase(function(err, result) {
  if (err) throw new Error;
  console.log('DB drop');
  db.close();
});