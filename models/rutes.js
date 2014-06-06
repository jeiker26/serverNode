var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var rutes = new Schema({
  user:       { type: String },
  info:       { type: Array },
  rutes:      { type: Array }
});

module.exports = mongoose.model('Rutes', rutes);