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

// @route   GET api/orders/:id
// @desc    Get order by id
// @access  Private
router.get('/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  const orderId = req.params.id;

  Order.findById(orderId)
    .then(order => {
      if (order === null) {
        return res.status(404).json('Not Found Order');
      }

      return res.status(200).json(order);
    });
});

// @route   POST api/orders/create
// @desc    Take an order: create an order and add its to list
// @access  Private
router.post('/create', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  const user = req.user;
  const cartId = user.cart;
  const userId = user._id;
  const { address, grandtotal } = req.body;

  Cart.findById(cartId)
    .then(cart => {
      if (cart === null || cart === undefined || cart.listItems === undefined) {
        return res.status(404).json('Nothing in your cart');
      }
      if (cart.listItems.length === 0) {
        return res.json('Nothing in your cart');
      }

      User.findById(userId)
        .then(user => {
          let order = {
            user: user._id,
            listItems: cart.listItems,
            shipaddress: address,
            status: 1,
            grandtotal: grandtotal
          };

          const newOrder = new Order(order);
          user.orders.push(newOrder);

          try {
            newOrder.save();
            user.save();
          } catch (error) {
            return res.status(500).json(error.message);
          }

          return res.status(200).json({
            message: 'Order Successfull. Check in your Orders',
            order: newOrder
          });
        })
        .catch(err => res.status(400).json(err.message));
    })
    .catch(err => res.status(400).json(err.message));
});

// @route   PATCH api/orders/update/status/:id
// @desc    Update order status
// @access  Private
router.patch('/update/status/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  const orderId = req.params.id;
  const { orderStatus } = req.body;

  Order.findById(orderId)
    .then(order => {
      if (order === null) {
        return res.status(404).json('Not Found Order');
      }

      order.status = orderStatus;

      try {
        order.save();
      } catch (error) {
        return res.status(500).json(error.message);
      }

      return res.status(200).json('Updated order status');
    });
});

module.exports = router;
