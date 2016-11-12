module.exports = function(app, swaggerJson) {
  var express = require('express');
  var router = express.Router();
  var uri = require('./swagger-uri')(swaggerJson);

  //Log swagger
  require('./swagger-log')(swaggerJson);

  /*var swaggerJson = require('./utils/resource-swagger-json')(specification, [UserResource]);*/
  /*console.log(uri+"/api-docs.json");
  app.get("/api-docs.json", function(req, res, next) {
    res.json(swaggerJson);
  });*/

  swaggerJson.tags = [];
  var swaggerTools = require('swagger-tools');
  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerJson, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    //app.use(middleware.swaggerValidator());

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());
  });
}
