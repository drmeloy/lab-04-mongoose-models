const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  swordName: {
    type: String,
    required: true
  },
  hasBow: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Samurai', schema);
