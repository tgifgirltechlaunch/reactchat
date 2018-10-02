const port = 3001;
const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const uuidv1 = require('uuid/v1');

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

io.on('connection', function (socket){
  console.log('a user connected', socket.id);
  socket.emit('connected', 'connection established');

  socket.emit('MESSAGES', [
    {
      id: uuidv1(),
      text:'i love coding'
    },
    {
      id: uuidv1(),
      text:'i love coding'
    },
    {
      id: uuidv1(),
      text:'i love coding'
    },
    {
      id: uuidv1(),
      text:'i love coding'
    },
  
  ]);




socket.on('MESSAGE', function(message){
  io.emit('MESSAGE', {

    id: uuidv1(),
    text: message.text
  });
});
});

http.listen(port, function(err) {
  if(err) throw err;
  console.log('listening on port ' + port);
});
