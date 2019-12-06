const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numEyes: {
    type: Number,
    required: true
  },
  numLegs: {
    type: Number,
    required: true
  },
  numHands: {
    type: Number,
    required: true
  },
  isCaptain: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Pirate', schema);
