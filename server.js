var express = require('express');
var bodyParser = require('body-parser')
var routes = require('./lib/api/routes/routesIndex');

app = express(),
// Assigning what port the server listens on. The assigned port once deployed OR 3000 when local.
port = process.env.PORT || 3000;
app.listen(port);

// Assign routes to the app
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/', routes);

console.log('SafeHopper RESTful API server started');
