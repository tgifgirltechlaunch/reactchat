const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  uid: String,
  text: String,
  date: Date,
  name: String,
  email: String
});

module.exports = mongoose.model('Message', messageSchema);