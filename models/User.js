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
  wishList: {
    type: ObjectId,
    ref: 'wishlist'
  },
  cart: {
    type: ObjectId,
    ref: 'carts'
  },
  orders: [{
    type: ObjectId,
    ref: 'orders'
  }]
});

module.exports = User = mongoose.model('users', UserSchema);