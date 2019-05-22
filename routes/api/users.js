const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const router = express.Router();

// Load Input Validation
const validateRegisterInput = require('../../validation/user/register');
const validateLoginInput = require('../../validation/user/login');

// Load user model
const User = require('../../models/User');
const WishList = require('../../models/WishList');
const Cart = require('../../models/Cart');
const Order = require('../../models/Order');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/
// @desc    Get all users
// @access  Private
router.get('/', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  let error = null;

  User.find({})
    .then(users => {
      if (!users) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(users);
    })
});

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists.';
        return res.status(400).json(errors);
      } else {
        // Create or get an avatar
        const avatar = gravatar.url(req.body.email, {
          s: '200',   // Size
          r: 'pg',    // Rating
          d: 'mm'     // Default
        });

        const wishList = new WishList();
        const cart = new Cart();

        // Create new user
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
          wishList: wishList,
          cart: cart,
          orders: [],
        });

        try {
          wishList.save();
          cart.save();
        } catch (error) {
          res.json(error.message);
        }

        // Hash password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
});

// @route   POST api/users/login
// @desc    Login user / Returning TWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email })
    .then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // User matched

            // Create JWT payload
            const payload = { id: user.id, name: user.name, avatar: user.avatar }

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  user: user,
                  token: 'Bearer ' + token
                })
              });
          } else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
        })
    })
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt-user', { session: false }), (req, res) => {
  res.json({
    user: req.user
  });
});

// @route   DELETE api/users/delete/:id
// @desc    Delete a user by id
// @access  Private
router.delete('/delete/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  User.findOneAndRemove({ _id: req.params.id })
    .exec()
    .then(result => {
      if (result == null) {
        return res.status(400).json('Not Found User');
      }
      return res.json('Deleted')
    })
    .catch(err => res.json(err.message));
});

// @route   GET api/users/wishlist
// @desc    Return current user wishlist
// @access  Private
router.get('/wishlist', (req, res) => {
  res.json(req.user.wishList);
});

module.exports = router;
