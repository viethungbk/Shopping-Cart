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

  Cart.findById(cartId)
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        return res.status(404).json('Not Found Cart');
      } else {
        // Found cart
        let productIds = foundCart.listItems.map(cartItem => cartItem.product.toString());
        const index = productIds.indexOf(item.product);

        // If there is product in cart
        if (index !== -1) {
          foundCart.listItems[index].quantity += item.quantity;
          try {
            foundCart.save();
          } catch (error) {
            return res.status(500).json('Can not add this item');
          }

          return res.status(200).json({
            cart: foundCart,
            message: 'Product added to cart'
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

// @route   PATCH api/cart/update
// @desc    Update cart item
// @access  Private
router.patch('/update', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const cartId = req.user.cart;
  // cart: [{
  //   product,
  //   quantity
  // }]
  const { cart } = req.body;

  Cart.findById(cartId)
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        return res.status(404).json('Not Found Cart');
      } else {
        // Found cart

        foundCart.listItems = cart;

        try {
          foundCart.save();
        } catch (error) {
          return res.status(500).json('Cant update cart');
        }

        return res.status(200).json({
          cart: foundCart,
          message: 'Update cart successfull'
        });
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Not Found Cart');
    });
});

// @route   DELETE api/cart/delete/item/:id
// @desc    Delete a product in cart
// @access  Private
router.delete('/delete/item/:id', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const cartId = req.user.cart;
  const productId = req.params.id;

  Cart.findById(cartId)
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        return res.status(404).json('Not Found Cart');
      } else {
        // Found cart
        let productIds = foundCart.listItems.map(cartItem => cartItem.product.toString());
        let index = productIds.indexOf(productId);

        if (index === -1) {
          return res.status(404).json('Not found product in your cart');
        }

        try {
          foundCart.listItems.splice(index, 1);
          foundCart.save();
        } catch (error) {
          return res.status(500).json(error.message);
        }

        return res.status(200).json('Removed item');
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Error to remove product from your Cart');
    });
});

// @route   DELETE api/cart/delete
// @desc    Delete all products in cart
// @access  Private
router.delete('/delete', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const cartId = req.user.cart;

  Cart.findById(cartId)
    .then((foundCart) => {
      if (!foundCart) {
        // Not found cart
        return res.status(404).json('Not Found Cart');
      } else {

        try {
          foundCart.listItems = [];
          foundCart.save();
        } catch (error) {
          return res.status(500).json(error.message);
        }

        return res.status(200).json('Removed all items');
      }
    })
    .catch(err => {
      console.log(err.message);
      return res.status(404).json('Error to remove product from your Cart');
    });
});

module.exports = router;
