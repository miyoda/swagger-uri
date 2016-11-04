module.exports = function(resources) {
  if (typeof resources != "array") {
    resources = [resources];
  }
  var _ = require('lodash');

  // Get the Swagger paths and definitions for each resource.
  var paths = {};
  var definitions = {};
  _.each(resources, function(resource) {
    var swagger = resource.swagger();
    paths = _.assign(paths, swagger.paths);
    definitions = _.assign(definitions, swagger.definitions);
  });

  // Define the specification.
  var specification = {
    swagger: '2.0',
    info: {
      description: '',
      version: '0.0.1',
      title: '',
      contact: {
        name: 'test@example.com'
      },
      license: {
        name: 'MIT',
        url: 'http://opensource.org/licenses/MIT'
      }
    },
    host: 'localhost:3000',
    basePath: '',
    schemes: ['http'],
    definitions: definitions,
    paths: paths
  };
  return specification;
}
