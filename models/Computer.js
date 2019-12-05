const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  hd: {
    type: String,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  isGaming: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Computer', schema);
