const express = require('express');
const passport = require('passport');

// Load Cart model
const Cart = require('../../models/Cart');

const router = express.Router();

// @route   GET api/cart/
// @desc    Get user's cart
// @access  Private
router.get('/', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const cartId = req.user.cart;

  Cart.findById(cartId)
    .exec()
    .then(rs => {
      res.json(rs.listItems);
    })
    .catch(err => res.status(400).json(err.message));
});

// @route   POST api/cart/add
// @desc    Add a product to cart
// @access  Private
router.post('/add', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const cartId = req.user.cart;
  // item: {
  //   product,
  //   quantity
  // }
  const item = req.body;

  // Check input ???

  Cart.findById(cartId)
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        return res.status(404).json('Not Found Cart');
      } else {
        // Found cart
        let productIds = foundCart.listItems.map(cartItem => cartItem.product).join(' ');

        // If there is product in cart
        if (productIds.includes(item.product._id)) {
          Cart.findOneAndUpdate({
            listItems: {
              $elemMatch: { product: item.product }
            }
          },
            {
              $inc: { 'listItems.$.quantity': item.quantity }
            })
            .exec()
            .then(cart => res.json(cart))
            .catch(err => {
              console.log(err);
              return res.status(501).json('Can not add to cart');
            });
        } else {
          // If there is not product in cart
          foundCart.listItems.push(item);
          foundCart
            .save()
            .then(cart => res.json(cart))
            .catch(err => {
              console.log(err);
              return res.status(501).json('Can not add to cart');
            });
        }
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Not Found Cart');
    });
});

// @route   DELETE api/cart/
// @desc    Empty the cart
// @access  Private
// router.delete('/', passport.authenticate('jwt-user', { session: false }), (req, res) => {
//   const cartId = req.user.cart;

//   Cart.findByIdAndRemove(cartId)
//     .exec()
//     .then(cart => res.json(cart))
//     .catch(err => {
//       console.log(err.message);
//       return res.status(500).json(err.message);
//     });

// });

module.exports = router;
