const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  battery: String
});

module.exports = Product = mongoose.model('products', ProductSchema);