const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const CartSchema = new Schema({
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
  ]
});

module.exports = Cart = mongoose.model('carts', CartSchema);