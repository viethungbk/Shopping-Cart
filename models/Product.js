const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true
  },
  pricebefore: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  iventory: {
    type: Number,
    required: true
  },
  image: Buffer,
  details: String,
  rate: [{
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
  }]
});

module.exports = Product = mongoose.model('products', ProductSchema);