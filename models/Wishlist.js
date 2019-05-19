const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const WishlistSchema = new Schema({
  listItems: [
    {
      product: {
        type: ObjectId,
        ref: 'products'
      }
    }
  ]
});

module.exports = Wishlist = mongoose.model('wishlist', WishlistSchema);