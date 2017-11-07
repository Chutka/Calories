var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  last: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 256
  },
  password: {
    type: String,
    required: true,
    max: 100
  },
  age: {
    type: Number,
    required: true,
    max: 90
  }
});

module.exports = mongoose.model('User', UserSchema);
