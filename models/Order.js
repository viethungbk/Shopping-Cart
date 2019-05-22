const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const OrderSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users'
  },
  listItems: [
    {
      product: {
        type: ObjectId,
        ref: 'products'
      },
      quantity: Number
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  shipaddress: String,
  status: String
});

module.exports = Order = mongoose.model('orders', OrderSchema);