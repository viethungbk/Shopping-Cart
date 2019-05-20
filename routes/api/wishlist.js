const express = require('express');
const passport = require('passport');

// Load Cart model
const WishList = require('../../models/WishList');

const router = express.Router();

// @route   GET api/wishlist/
// @desc    Get user's wishlist
// @access  Private
router.get('/', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const wishListId = req.user.wishList;

  WishList.findById(wishListId)
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
  const wishListId = req.user.wishList;

  const { product } = req.body;

  WishList.findById(wishListId)
    .then((foundWishList) => {
      if (!foundWishList) {
        // Not found wishlist
        return res.status(404).json('Not Found WishList');
      } else {
        // Found wishlist
        let productIds = foundWishList.listItems.map(item => item._id).join(' ');

        // If there is product in wishlist
        if (productIds.includes(product._id)) {
          return res.status(400).json('This product was in your wishlist');
        } else {
          // If there is not product in wishlist
          foundWishList.listItems.push(product);
          foundWishList
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
      return res.status(404).json('Not Found WishList');
    });
});

module.exports = router;
