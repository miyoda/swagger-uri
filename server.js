'use strict';

console.log("Starting standalone server...");

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var expressMicroserviceAuth = require('./index.js');
app.use('/auth', expressMicroserviceAuth(require('./db')));
app.use('/authBis', expressMicroserviceAuth(require('./dbBis')));


app.get("/", function(req, res) {
  res.status(200).send("SERVER BASE");
});



var port = 3000;
app.listen(port, function() {
  console.log('Listening on port %s', port)
});
