var express = require('express');           // Required for routing
var bodyParser = require('body-parser');    // Middleware for populating the req.body property in JSON POST requests
var passport = require('passport');         // Middleware for handling authentication
var session = require('express-session');

var app = express();

// User body-parser so that the req.body property is populated.
app.use(bodyParser.json());

// Add database models
require('./server/models/db');

// Initialize passport after the models but before routesAPI
require('./server/config/passport');

// app.use(session({ secret: "secret" }));
// app.use(passport.initialize());
// app.use(passport.session());


var routesAPI = require('./server/routes/api');     // Routes needs to be brought in after the models.

// Allows static pages to be served from the public folder
app.use(express.static('public'));

// Redirect root requests to superCoolApp.html
// app.get('/', function(req, res){
//      res.redirect('/index.html');
//  });

// Catch API requests
app.use('/api', routesAPI);


/* ERROR HANDLERS */
// Unauthorized Users
app.use(function(err, req, res, next){
    console.log('Err catch function');
    console.log(err);
    if (err.name=='UnauthorizedError'){
        console.log(err);
        res.status(401);
        res.json({
            'message': err.name + ': ' + err.message
        });
    }
});


//Set server to listen to port 3000
app.listen(3000, function(){
    console.log('Application listening on port 3000.');

});
