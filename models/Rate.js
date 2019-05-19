const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const RateSchema = new Schema({
  rating: {
    type: Number,
    required: true
  },
  rateduser: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rate = mongoose.model('rates', RateSchema);