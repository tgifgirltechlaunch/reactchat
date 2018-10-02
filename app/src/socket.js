import io from 'socket.io-client/dist/socket.io';
import { server } from './api';

const socket = io(server, { jsonp: false });

socket.on('connected', (data) => {
  console.log('socket id ', socket.id, data);
});


// Event: 'connect_timeout'
// Fired upon a connection timeout.

socket.on('connect_timeout', (timeout) => {
  console.log('socket connection timeout');
});


// #Event: 'error'
// error(Object) error object
// Fired when an error occurs.

socket.on('error', (error) => {
  console.log('socket connection error');
});


// #Event: 'connect error'
// error(Object) error object
// Fired when an error occurs.

socket.on('connect_error', (error) => {
  console.log('Connection Failed ', error.message);
});


// #Event: 'disconnect'
// reason(String) either 'io server disconnect' or 'io client disconnect'
// Fired upon a disconnection.

socket.on('disconnect', (reason) => {
  console.log('socket connection disconnected', reason);
});


// #Event: 'reconnect'
// attempt(Number) reconnection attempt number
// Fired upon a successful reconnection.

socket.on('reconnect', (attemptNumber) => {
  console.log('socket connection reconnected');
});


socket.on('session registered', (data) => {
  console.log(data);
});

export default socket;