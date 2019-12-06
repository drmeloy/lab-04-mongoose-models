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
  numStrings: {
    type: Number,
    required: true,
    min: 4,
    max: 12
  },
  woodType: {
    type: String,
  }
});

module.exports = mongoose.model('Guitar', schema);
