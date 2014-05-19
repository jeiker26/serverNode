var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var users = new Schema({
  name:         String,
  provider:     String, //Twitter o Facebook
  provider_id:  {type:String ,unique: true}, //Lo da face o twitter
  photo:        String,
  createdAt:    {type:Date,default: Date.now}
});

var User = mongoose.model('User', users);