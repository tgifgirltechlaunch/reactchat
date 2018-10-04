module.exports = function(server) {
    const io = require('socket.io')(server);
    const uuidv1 = require('uuid/v1');
    const Message = require('./models/message');
  
    io.on('connection', function (socket) {
      socket.emit('connected', 'connection stablished');
  
      socket.on('MESSAGE', function (message) {
        // save in the database and emit to all users
        let newMessage = new Message(message);
  
        newMessage.save()
        .then(message => {
          io.emit('MESSAGE', message);
        })
        .catch(err => console.error(err));
      });
    });
  }