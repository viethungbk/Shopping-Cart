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
  console.log(product);

  WishList.findById(wishListId)
    .then((foundWishList) => {
      if (!foundWishList) {
        // Not found wishlist
        return res.status(404).json('Not Found WishList');
      } else {
        // Found wishlist
        // If there is product in wishlist
        if (foundWishList.listItems.includes(product)) {
          return res.status(400).json('This product was in your WishList');
        } else {
          // If there is not product in wishlist
          foundWishList.listItems.push(product);
          foundWishList
            .save()
            .then(() => {
              return res.status(200).json('Successfull to add this product to your WishList');
            })
            .catch(err => {
              console.log(err);
              return res.status(501).json('Can not add to WishList');
            });
        }
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Error to add to WishList');
    });
});

// @route   DELETE api/wishlist/delete/item/:id
// @desc    Delete a product in wishlist
// @access  Private
router.delete('/delete/item/:id', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const wishListId = req.user.wishList;
  console.log('wishlist id: ', wishListId)
  console.log('params: ', req.params.id);

  const productId = req.params.id
  console.log(productId);

  WishList.findById(wishListId)
    .then((foundWishList) => {
      if (!foundWishList) {
        // Not found wishlist
        return res.status(404).json('Not Found WishList');
      } else {
        // Found wishlist
        // If there is NOT product in wishlist
        if (!foundWishList.listItems.includes(productId)) {
          return res.status(400).json('This product was NOT in your WishList');
        } else {
          // If there is product in wishlist
          console.log(foundWishList)
          WishList.findOneAndUpdate({
            _id: wishListId
          },
          {
            $pull: { listItems: productId }
          })
            .exec()
            .then(cart => res.json(cart))
            .catch(err => {
              console.log(err);
              return res.status(501).json('Can not delete item');
            });
        }
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Error to delete product from your WishList');
    });
});

module.exports = router;
