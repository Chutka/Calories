var mongoose = require('mongoose');
var config = require('../config');

var User = require('../models/users');
var Day = require('../models/day');

mongoose.connect(config.get('database:url'), {
    useMongoClient: true
});

var db = mongoose.connection;


User.find({name: 'Patrick'}, function(err, result) {
    if (err) throw new Error(err);
    let date = new Date();
    Day.create({
      data: 1,
      date: date,
      idUser: result[0].id
    }, function(err, day) {
      if (err) throw new Error(err);
    })
});

Day.find(function(err, result) {
  console.log(result);
  db.close();  
});
