var mongoose = require('mongoose');
var config = require('../config');

var User = require('../models/users');

mongoose.connect(config.get('database:url'), {
    useMongoClient: true
});

var db = mongoose.connection;


User.find(function(err, result) {
    if (err) throw new Error(err);
    console.log(result);
    mongoose.connection.close();
});

