'use strict';

module.exports = function(db, swaggerDefinition, options) {
  var swaggerAdd = require('./utils/swagger-add');
  var swaggerUri = require('./utils/swagger-uri');
  var extend = require('extend');
  var express = require('express');
  var router = express.Router();

  swaggerDefinition = extend({
    "info": {
        "title": "Auth API",
        "description": "Auth microservice 4 social and local login",
        "version": "1.0.0"
    },
    swagger: '2.0',
    host: 'localhost:3000',
    basePath: '/auth',
    schemes: ['http'],
    responses: {},
    parameters: {},
    securityDefinitions: {},
    tags: []
  }, swaggerDefinition);

  options.path = swaggerUri(swaggerDefinition);

  //static
  router.use(express.static('static'));

  //crud - Basic API 4 models
  swaggerAdd(swaggerDefinition, require('./routes/crud')(router, db, options));

  //login - passport routes
  swaggerAdd(swaggerDefinition, require('./routes/login')(router, db, options));

  //more - more routes
  swaggerAdd(swaggerDefinition, require('./routes/more')(router, db, options));

  require('./utils/swagger-setup')(router, swaggerDefinition);
  return router;
};
