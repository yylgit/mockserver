var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var port = 8018;
var app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));


var bianlidianRouter = require('./routers/bianlidian.js');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


app.use('/', bianlidianRouter);

app.listen(port);
console.log('Listening on port '+port+'.......');
