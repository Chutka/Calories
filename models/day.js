var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DaySchema = new Schema({
  data: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  idUser: {
    type: ObjectId,
    required: true
  }
});

module.exports = mongoose.model('Day', DaySchema);