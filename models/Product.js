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
  brand: {
    type: String,
    required: true
  },
  iventory: {
    type: Number,
    required: true
  },
  image: [String],
  generalInfo: {
    OS: String,
    language: [String]
  },
  screen: {
    typeScreen: String,
    displayColor: String,
    resolution: String,
    screenSize: String
  },
  camera: String,
  cpu: String,
  ram: String,
  memory: {
    rom: String,
    cardSlot: String
  },
  battery: String,
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