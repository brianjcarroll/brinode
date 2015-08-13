// setup app / server
var express = require('express');
var app = express();

// require dependencies 
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// files
var config = require('./config/config.js');
var routes = require('./routes/routes.js');

// connect to the database or connect to a local instance of mongo on the 'test' DB
mongoose.connect(config.db.url || 'mongoose://localhost/27017/test');

// apply middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

// route handler for index
app.get('/', routes);

// start it up
app.listen(8080);
