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
  camera: {
    primary: String,      // Camera chính (trước)
    secondary: String,    // Camera phụ (sau)
    features: [String],
    video: String
  },
  cpu: String,
  ram: String,
  memory: {
    rom: String,
    cardSlot: String
  },
  comms: {
    wifi: String,
    blutooth: String,
    simCard: String,
    usb: String,
    chargingProt: String
  },
  battery: String,
  sensors: [String]
});

module.exports = Product = mongoose.model('products', ProductSchema);