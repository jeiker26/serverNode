var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var users = new Schema({
  name:       { type: String },
  password:   { type: String },
  age:        { type: Number },
  email:      { type: String }
});

module.exports = mongoose.model('Users', users);