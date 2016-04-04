var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database
mongoose.connect('mongodb://localhost/photoboard');

// configure server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log('LISTENING to requests on port: 8000');

// export app
module.exports = app;