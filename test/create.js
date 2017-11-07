var async = require('async')
var User = require('../models/users')
var Day = require('../models/day')

var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get('database:url'));
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = [];
var days = [];

function usersCreate(name, last, email, password, age, callback) {
  userDetails = {
    name: name,
    last: last,
    email: email,
    password: password
  }

  if (typeof age == 'number') userDetails.age = age;
  
  var user = new User(userDetails);
       
  user.save(function (err) {
    if (err) {
      callback(err, null);
      return
    }
    users.push(userDetails);
    callback(null, user)
  });
}

function createUsers(callback) {
    async.parallel([
          function(callback) {
            usersCreate('Patrick', 'Rothfuss', 'one@one.ru', 'one', 20, callback);
          },
          function(callback) {
            usersCreate('Ben', 'Bova', 'two@two.ru', 'two', 20, callback);
          },
          function(callback) {
            usersCreate('Isaac', 'Asimov', 'three@three.ru', 'three', 20, callback);
          },
          function(callback) {
            usersCreate('Bob', 'Billings', 'four@four.ru', 'four', 20, callback);
          },
          function(callback) {
            usersCreate('Jim', 'Jones', 'five@five.ru', 'five', 20, callback);
          },
        ],
        // optional callback
        callback);
}

async.series([
    createUsers,
],
// optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err);
    }
    else {
        console.log('Result ' + results);
        
    }
    //All done, disconnect from database
    mongoose.connection.close();
});




