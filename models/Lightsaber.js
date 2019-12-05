const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  numBlades: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Lightsaber', schema);