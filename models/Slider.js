const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SliderSchema = new Schema({
  image: {
    type: Buffer,
    required: true
  },
  sliderheader: {
    type: String,
    required: true
  },
  bigtext: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Slider = mongoose.model('sliders', SliderSchema);