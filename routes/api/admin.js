const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const router = express.Router();

// Load Input Validation
const validateRegisterInput = require('../../validation/user/register');
const validateLoginInput = require('../../validation/user/login');

// Load user model
const Admin = require('../../models/Admin');

// @route   GET api/admin/
// @desc    Get all admins
// @access  Private
router.get('/', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  let error = null;
  Admin.find({})
    .then(admins => {
      if (!admins) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(admins);
    })
});

// @route   POST api/admin/register
// @desc    Register admin
// @access  Private
router.post('/register', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Admin.findOne({ email: req.body.email })
    .then(admin => {
      if (admin) {
        errors.email = 'Email already exists.';
        return res.status(400).json(errors);
      } else {
        // Avatar

        // Create new admin
        const newAdmin = new Admin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // Hash password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin
              .save()
              .then(admin => res.json(admin))
              .catch(err => console.log(err));
          });
        });
      }
    })
});

// @route   POST api/adimin/login
// @desc    Login admin / Returning TWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find admin by email
  Admin.findOne({ email })
    .then(admin => {
      // Check for admin
      if (!admin) {
        errors.email = 'Admin not found';
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(password, admin.password)
        .then(isMatch => {
          if (isMatch) {
            // User matched

            // Create JWT payload
            const payload = { id: admin.id, name: admin.name }

            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
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

// @route   GET api/admin/current
// @desc    Return current admin
// @access  Private
router.get('/current', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

// @route   DELETE api/admin/:id
// @desc    Delete a product by id
// @access  Private
router.delete('/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  Admin.findOneAndRemove({ _id: req.params.id })
    .exec()
    .then(result => {
      if (result == null) {
        return res.status(400).json('Not Found Admin');
      }
      return res.json('Deleted')
    })
    .catch(err => res.json(err.message));
});

module.exports = router;
