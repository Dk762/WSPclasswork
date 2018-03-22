var express = require('express')
var app = express.Router();

// respond with "hello world" when a GET request is made to the homepage
module.exports = app
  .use(function(req, res, next){
     res.write('This is provided by newpaltz.edu\r\n');
     next();
  })

  .get('/hello', function (req, res) {
    res.write('world')
    res.end();
  })
  .get('/goodbye', function (req, res) {
    res.write('new paltz')
    res.end(); 
  })