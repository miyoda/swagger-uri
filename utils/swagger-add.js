module.exports = function(swaggerDefinition, swaggerExtra) {
  var extend = require('extend');
  var concat = require('./concat-unique');

  console.log('swagger-add(',swaggerDefinition,',',swaggerExtra,')');

  swaggerDefinition.definitions = extend(swaggerDefinition.definitions, swaggerExtra.definitions);

  if (typeof swaggerDefinition.tags == 'undefined') {
    swaggerDefinition.tags = [];
  }
  swaggerDefinition.tags = concat(swaggerDefinition.tags, swaggerExtra.tags);

  if (typeof swaggerDefinition.paths == 'undefined') {
    swaggerDefinition.paths = {};
  }
  for (var path in swaggerExtra.paths) {
    swaggerDefinition.paths[(swaggerExtra.basePath ? swaggerExtra.basePath : '')+path] = swaggerExtra.paths[path];
    for (var method in swaggerExtra.paths[path]) {
      swaggerDefinition.tags = concat(swaggerDefinition.tags, swaggerExtra.paths[path][method].tags);
    }
  }

  return swaggerDefinition;
}
