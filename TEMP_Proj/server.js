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
autoIncrement.initialize(connection);
app.schema.autoIncrement = autoIncrement;
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

// Experss Shared Variables (Comented for reference)
/*
Shared Variables Data Structure as comment

> app.<SHARED_VARIABLE_DATA_STRUCTURE> = <String/Number...>

> ...
> ...

> ...
*/

// Express Shared Variables declerations
//app.<SHARED_VARIABLE_DATA_STRUCTURE> = ""

// On Server-Start Functions
//require('./onServerStart/<ON_SERVER_START_FUNCTION_1>.js')(app);


// Handle uncaught exception
 /* 
 
process.on('uncaughtException', function(err){
	console.log('Error: ', err.stack);
	var data = {};
	data.endemail = "groeitech@gmail.com";
	data.title = "Error Report by SERVER - "+err;
	data.msg = "Hi,\n\nThe following errors occurred in SERVER.\n\n"+err+" \n"+"STACKTRACE:\n"+err.stack+"\n\n Regards,\n Team GROEI.";
	app.common.sendEmail(data, function(err, resData){
		if (err) {
			console.log("Error in sending error email:",err);
		} else {
			console.log("success send error email");
		}
	});
 }); 
 
 */
 
// API Router reference
require('./router.js')(app);

// Models reference
require('./models')(app, mongoose);

// Function Files reference
//app.<FUNCTION_SET_1> = require('./joyi/functions/<FUNCTION_SET1>');

// Handle 404 - Keep this as a last route (TODO: To TEST)
/*app.use(function(req, res, next) {
    res.status(404);
    res.send('404: Page Not Found');
    //res.status(404).json({message : "404: Page Not Found", res : false});
}); */

app.post("/setMessage", function(req, res) {
	console.log("server received")
	var eventEmitter = new events.EventEmitter();
	
    eventEmitter.on('setMessagedetails', function(data) {
        var messageData = "Name: " + data.name + ", Email: " + data.email + ", Phone: " + data.phone + ", Message: " + data.message;

        var custMessageData = "Hi " + data.name + ",\n" + "\tThank you for your message. Our Team will get back to you.\nFind Ur Store Team."
		console.log("custMessageData:", custMessageData);
        eventEmitter.emit('sendEmailToCust', messageData, custMessageData, data);
    });
	
    eventEmitter.on('sendEmailToCust', function(messageData, custMessageData, data) {
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "rakshithranjith@gmail.com",
                pass: "Rakshithat@8"
            }
        });
        var mailOptions = {
            from: 'support@bts.com',
            to: data.email,
            subject: 'Thank you for your enquiry',
            text: custMessageData
        }
        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                res.end("error");
            } else {
                console.log('Mail Sent');
                eventEmitter.emit('sendEmail', messageData);
            }
            smtpTransport.close();
        });



    });

    eventEmitter.on('sendEmail', function(messageData) {
        console.log("In Send Email:",messageData)
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "rakshithranjith@gmail.com",
                pass: "Rakshithat@8"
            }
        });
        var mailOptions = {
            from: 'rakshithranjith@gmail.com',
            to: 'rakshithranjith@gmail.com',
            subject: 'Enquiry Email',
            text: messageData
        }
        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                res.json({
                    message: "error"
                });

            } else {}
            smtpTransport.close();
        });
        res.json({
            message: "sent"
        });
    });
	
	eventEmitter.emit('setMessagedetails', req.body);
});
// Server Start
var listener = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
 
 

