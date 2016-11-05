'use strict';

module.exports = function(app, db) {
  var Resource = require('resourcejs');
  var swaggerAdd = require('../utils/swagger-add');

  var UserModel = require('../models/user')(db);

  var models = {
    'user': UserModel
  };

  var swaggerDefinition = {};

  for (var modelKey in models) {
      var model = models[modelKey];
      var modelResource = Resource(app, '/crud', modelKey, model).rest();
      swaggerAdd(swaggerDefinition, modelResource.swagger());

      /*var modelSwagger = modelResource.swagger();
      swaggerDefinition.paths = extend(swaggerDefinition.paths, modelSwagger.paths);
      swaggerDefinition.definitions = extend(swaggerDefinition.definitions, modelSwagger.definitions);*/
  }
  return swaggerDefinition;
}
