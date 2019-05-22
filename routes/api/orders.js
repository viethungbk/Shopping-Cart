const express = require('express');
const passport = require('passport');

// Load Cart model
const Order = require('../../models/Order');
const User = require('../../models/User');

const router = express.Router();

// @route   GET api/orders/user
// @desc    Get user's order
// @access  Private
router.get('/user', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const listOrderIds = req.user.orders;
  console.log(listOrderIds)

  if (listOrderIds === null || listOrderIds === undefined) {
    return res.status(404).json('No Orders');
  }
  if (listOrderIds.length === 0) {
    return res.status(404).json('No Orders');
  }

  let ordersPromise = [];

  listOrderIds.forEach(orderId => {
    ordersPromise.push(Order.findById(orderId));
  });

  Promise.all(ordersPromise)
    .then(orders => {
      return res.json(orders);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err.message);
    });
});

// @route   GET api/orders/
// @desc    Get all orders (for admin)
// @access  Private
router.get('/', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  Order.find({})
    .then(orders => {
      res.json(orders);
    })
    .catch(err => res.status(500).json(err.message));
});

// @route   POST api/orders/create
// @desc    Take an order: create an order and add its to list
// @access  Private
router.post('/create', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const user = req.user;
  const cartId = user.cart;
  const userId = user._id;

  Cart.findById(cartId)
    .then(cart => {
      if (cart === null || cart === undefined || cart.listItems === undefined) {
        return res.status(404).json('Nothing in your cart');
      }
      if (cart.listItems.length === undefined) {
        return res.json('Nothing in your cart');
      }

      User.findById(userId)
        .then(user => {
          let order = {
            user: user._id,
            listItems: cart.listItems,
            shipaddress: '',
            status: 'Cho xac nhan'
          };

          const newOrder = new Order(order);
          user.orders.push(newOrder);

          try {
            newOrder.save();
            user.save();
          } catch (error) {
            res.status(500).json(error.message);
          }
        })
        .catch(err => res.status(400).json(err.message));
    })
    .catch(err => res.status(400).json(err.message));
});

// @route   PATCH api/orders/update/:id
// @desc    Update order status
// @access  Private
router.delete('/delete/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  
});

module.exports = router;
