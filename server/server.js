const port = 3001;
const express = require('express');
const fs = require('fs');
const app = express();
const httpServer = require('http').Server(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//purpose of this is to enable cross domain requests
// Add headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

// Initialize databse
require('./database')();

// Initialize the sockets
require('./sockets')(httpServer);

// Initialize the routes
require('./routes')(app);

httpServer.listen(port, function(err) {
  if(err) throw err;
  console.log('listening on port ' + port);
});
