'use strict';

module.exports = function(db) {
  var express = require('express');
  var router = express.Router();

  router.get("/", function(req, res) {
    res.status(200).send("AUTH BASE");
  });

  var UserModel = require('./models/user')(db);

  var Resource = require('resourcejs');
  var UserResource = Resource(router, '', 'user', UserModel).rest();

  var swaggerJson = require('./utils/resource-swagger-json')(UserResource);
  router.get("/docs/json", function(req, res, next) {
    res.json(swaggerJson);
  });

  const swaggerUi = require('swagger-ui-express');
  router.use('/docs/ui', swaggerUi.serve, swaggerUi.setup(swaggerJson));

  return router;
};
