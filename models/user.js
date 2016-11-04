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

  var UserModel = db.model('User', UserSchema);

  return UserModel;
};
