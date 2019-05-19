const express = require('express');
const passport = require('passport');

// Load Cart model
const Wishlist = require('../../models/Wishlist');

const router = express.Router();

// @route   GET api/wishlist/
// @desc    Get user's wishlist
// @access  Private
router.get('/', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const wishlistId = req.user.wishlist;

  Wishlist.findById(wishlistId)
    .exec()
    .then(rs => {
      res.json(rs.listItems);
    })
    .catch(err => res.status(400).json(err.message));
});

// @route   POST api/wishlist/add
// @desc    Add a product to wishlist
// @access  Private
router.post('/add', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const wishlistId = req.user.wishlist;

  const { product } = req.body;

  // Check input ???

  Wishlist.findById(wishlistId)
    .then((foundWishlist) => {
      if (!foundWishlist) {
        // Not found wishlist
        return res.status(404).json('Not Found Wishlist');
      } else {
        // Found wishlist
        let productIds = foundWishlist.listItems.map(wishlistItem => wishlistItem.product).join(' ');

        // If there is product in wishlist
        if (productIds.includes(product._id)) {
          return res.status(400).json('This product was in your wishlist');
        } else {
          // If there is not product in wishlist
          foundWishlist.listItems.push(product);
          foundWishlist
            .save()
            .then(() => {
              return res.status(200).json('Successfull to add this product to your wishlist');
            })
            .catch(err => {
              console.log(err);
              return res.status(501).json('Can not add to wishlist');
            });
        }
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Not Found Wishlist');
    });
});

module.exports = router;
