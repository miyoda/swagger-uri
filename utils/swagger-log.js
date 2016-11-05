'use strict';

module.exports = function(swaggerJson) {
  var uri = require('./swagger-uri')(swaggerJson);

  console.log('swagger-log:',swaggerJson);

  console.log(uri);
  for (var path in swaggerJson.paths) {
    for (var method in swaggerJson.paths[path]) {
      var pathMethodDef = swaggerJson.paths[path][method];
      console.log(uri+path+' ('+method+'): ',(pathMethodDef.operationId ? (pathMethodDef.operationId+' - ') : '')+pathMethodDef.description);
    }
  }
}
