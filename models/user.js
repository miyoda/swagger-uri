'use strict';

module.exports = function(db) {
  // set up mongoose
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var UserSchema = Schema({
    facebookId: {type: String, index: { unique: true } },
    twitterId: {type: String, index: { unique: true } },
    googleId: {type: String, index: { unique: true } },
    githubId: {type: String, index: { unique: true } },
    instagramId: {type: String, index: { unique: true } },
    localId: {type: String, index: { unique: true } },
    facebookToken: {type: String },
    twitterToken: {type: String },
    googleToken: {type: String },
    githubToken: {type: String },
    instagramToken: {type: String },
    localPassword: {type: String },
    email: {type: String, index: { unique: true }},
    fullname: {type: String },
    birthday: {type: Date },
    gender: {type: String },
    phone: {type: Number, index: true},
    verifiedPhone: {type: Boolean },
    language: {type: String},
    photos: {type: [String]}
  },
  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
  });

  db.modelUser = db.modelUser ? db.modelUser : db.model('User', UserSchema);

  return db.modelUser;
};
