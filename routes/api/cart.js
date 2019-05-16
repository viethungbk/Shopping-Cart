const express = require('express');
const passport = require('passport');

// Load Cart model
const Cart = require('../../models/Cart');

const router = express.Router();

// @route   GET api/cart/
// @desc    Get user's cart
// @access  private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  // console.log(req.user);
  let error = null;
  Cart.find({ user: req.user })
    .then(cart => {
      if (!cart) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(cart);
    })
});

// @route   POST api/cart/add
// @desc    Add a product to cart
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = req.user;
  // item: {
  //   product,
  //   quantity
  // }
  const item = req.body;

  // Check input ???

  Cart.findOne({ user: user })
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        // Create new Cart
        const newCart = new Cart({
          user: user,
          listItems: [item]
        });
        newCart
          .save()
          .then(cart => res.json(cart))
          .catch(err => console.log(err));
      } else {
        // Found cart
        let productIds = foundCart.listItems.map(cartItem => cartItem.product).join(' ');

        // If there is product in cart
        if (productIds.includes(item.product._id)) {
          Cart.findOneAndUpdate({
            user: user,
            listItems: {
              $elemMatch: { product: item.product }
            }
          },
          {
            $inc: { 'listItems.$.quantity': item.quantity }
          })
            .exec()
            .then(cart => res.json(cart))
            .catch(err => console.log(err));
        } else {
          // If there is not product in cart
          foundCart.listItems.push(item);
          foundCart
            .save()
            .then(cart => res.json(cart))
            .catch(err => console.log(err));
        }
      }
    })
      .catch(err => console.log(err));
});

// @route   DELETE api/cart/
// @desc    Empty the cart
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = req.user;

  Cart.findOneAndRemove({ user: user })
    .exec()
    .then(cart => res.json(cart))
    .catch(err => console.log(err));

});

module.exports = router;
