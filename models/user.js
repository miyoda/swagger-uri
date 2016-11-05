'use strict';

module.exports = function(db) {
  // set up mongoose
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var UserSchema = Schema({
    username: {type: String },
    password: {type: String },
    fullname: {type: String },
  });

  db.modelUser = db.modelUser ? db.modelUser : db.model('User', UserSchema);

  return db.modelUser;
};
