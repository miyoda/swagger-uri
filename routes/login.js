'use strict';

module.exports = function(app, db) {
  var UserModel = require('../models/user')(db);


  var swaggerDefinition = {
    basePath: '/login'
  };

  /**
   * @swagger
   * /local:
   *   get:
   *     description: Login to the application with local user (no social)
   *     tags: [login]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         description: Username to use for login.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   */
   app.get(swaggerDefinition.basePath+'/local', function(req, res) {
    res.status(200).send('login local '+req.params.usename);
  });

  //swagger docs
  var swaggerJSDoc = require("swagger-jsdoc");
  var options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: ['./routes/login.js'],
  };
  return swaggerJSDoc(options);
}
