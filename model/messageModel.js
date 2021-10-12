const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please Provide an email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'please provide a valid email',
    ],
  },
  text: {
    type: Array,
    required: [true, 'Add some texts'],
  },
})
module.exports = mongoose.model('Message', MessageSchema)
