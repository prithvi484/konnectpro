// Basic NPM Modules
var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var subdomain = require('express-subdomain');
var path = require('path');
var Promise = require('es6-promise').Promise;
require('es6-promise').polyfill();
var logger = require('morgan');
var bodyParser = require('body-parser');
var events = require('events');
const flash = require('express-flash');

var nodemailer = require('nodemailer');
const passport = require('passport');

const expressValidator = require('express-validator');
// Express framework initialization
var app = express();
app.use(expressValidator());
// Logger initialization
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Configuration reference
//app.config = require('./configs/localConfig.js'); // Local Servers
//app.config = require('./configs/devConfig.js'); // Stagiging/Test Server
app.config = require('./configs/prodConfig.js'); // Production Server

// Schema reference
app.schema = {};

// Parsing requests
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

// Set Port
app.set('port', process.env.PORT || 4200);
app.use(express.static(path.join(__dirname,'./public/')));
// Mongoose Promise
mongoose.Promise = global.Promise;
// Mongoose Database connection (with auto-increment initialization)
var connection = mongoose.connect(app.config.MONGO_URI);
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


/* CORS Setup */
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);
// API Router reference
require('./router.js')(app);
// Server Start
var listener = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
 
 

