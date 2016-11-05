'use strict';

module.exports = function(swaggerDefinition) {
  return swaggerDefinition.schemes[0]+'://'+swaggerDefinition.host+swaggerDefinition.basePath;
}
