var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');

// respond with "hello world" when a GET request is made to the homepage
app.use('/simple' ,simple).listen(port);

console.log("running on http://" +servername + ":" + port)
  