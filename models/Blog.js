const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [{
    userCommented: {
      type: ObjectId,
      ref: 'users',
      required: true
    },
    content: String,
    date: {
      type: Date,
      default: Date.now
    },
  }]
});

module.exports = Blog = mongoose.model('blogs', BlogSchema);