const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  wishlist: [{
    type: ObjectId,
    ref: 'products',
    required: true
  }],
  rate: [{
    product: {
      type: ObjectId,
      required: true,
      ref: 'products'
    },
    rating: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = User = mongoose.model('users', UserSchema);