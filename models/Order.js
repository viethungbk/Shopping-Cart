const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const OrderSchema = new Schema({
  listOrders: [
    {
      product: {
        type: ObjectId,
        ref: 'products'
      },
      quantity: Number
    }
  ]
});

module.exports = Order = mongoose.model('orders', OrderSchema);