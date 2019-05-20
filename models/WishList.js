const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const WishListSchema = new Schema({
  listItems: [
    {
      type: ObjectId,
      ref: 'products'
    }
  ]
});

module.exports = WishList = mongoose.model('wishlist', WishListSchema);