[![Build Status](https://travis-ci.org/miyoda/swagger-utils.svg?branch=master)](https://travis-ci.org/miyoda/swagger-utils)
[![Dependency Status](https://david-dm.org/miyoda/swagger-utils.svg)](https://david-dm.org/miyoda/swagger-utils)
[![devDependency Status](https://david-dm.org/miyoda/swagger-utils/dev-status.svg)](https://david-dm.org/miyoda/swagger-utils#info=devDependencies)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   
Util methods for swagger with node.js
==============================================================

# Install
Execute:
> npm install --save swagger-utils

# Use example
```
var swaggerUtils = rquire('swagger-utils');
swaggerUtils.add(swaggerDefinition1, swaggerDefinition2);
swaggerUtils.log(swaggerJson);
swaggerUtils.setup(app, swaggerJson);
swaggerUtils.uri(swaggerDefinition);
```
