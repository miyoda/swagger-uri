'use strict';

module.exports = function(db) {
  // set up mongoose
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var AccessSchema = Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      required: true
    }
  },
  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
  });

  db.modelAccess = db.modelAccess ? db.modelAccess : db.model('Access', AccessSchema);

  return db.modelAccess;
};
