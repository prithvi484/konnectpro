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
var nodemailer = require('nodemailer');

// Express framework initialization
var app = express();

// Logger initialization
app.use(logger('dev'));

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

// Set Static Paths (Websites)
/* In Case Of SubDomain Existance: */
//app.use(subdomain('<subDomainName>', express.static('./public/'+app.config.WEB_FOLDER+'/<subDomainProject>'), {'index': ['index.html', 'index.htm']}));
//app.use(express.static(path.join(__dirname,'./public/'+app.config.WEB_FOLDER+'/joyiWeb')));

app.use(express.static(path.join(__dirname,'./public/')));
//app.use(express.static(path.join(__dirname,'./public/prod')));


// Mongoose Promise
mongoose.Promise = global.Promise;

// Mongoose Database connection (with auto-increment initialization)
var connection = mongoose.connect(app.config.MONGO_URI);
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

/*var promise = mongoose.connect(app.config.MONGO_URI, {
  useMongoClient: true,
});

promise.then(function(db) {
  //console.log("DB LOG: ",db)
});
*/

/* CORS Setup */
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);




// Common Functions' reference(Define common functions for the whole projects in this file)
app.common = require('./joyi/functions/common');

// Data Access Layer reference
app.crud = require('./dal/crud');

 
// API Router reference
require('./router.js')(app);

// Models reference
//require('./models')(app, mongoose);

// Server Start
var listener = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
 
 

