const express = require('express');
const multer = require('multer');
const fs = require('fs');
const passport = require('passport');

const upload = multer({ dest: '../../public/uploads' });
const productUpload = upload.fields([
  { name: 'name' },
  { name: 'price' },
  { name: 'pricebefore' },
  { name: 'brand' },
  { name: 'iventory' },
  { name: 'details' },
  { name: 'image' }
]);

// Load Input Validation
const validateProductInput = require('../../validation/product/product');

// Load Product model
const Product = require('../../models/Product');

const router = express.Router();

// @route   GET api/products/
// @desc    Get all products
// @access  Public
router.get('/', (req, res) => {
  let error = null;
  Product.find({})
    .then(products => {
      if (!products) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(products);
    })
});

// @route   GET api/products/:id
// @desc    Get a product by id
// @access  Public
router.get('/:id', (req, res) => {
  console.log(req.params)

  Product.findById(req.params.id)
    .exec()
    .then(product => {
      if (!product) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(product);
    })
    .catch(err => res.json(err.message));
});


// @route   DELETE api/products/:id
// @desc    Get a product by id
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Product.findOneAndRemove({ _id: req.params.id })
    .exec()
    .then(result => {
      if (result == null) {
        return res.status(400).json('Not Found Product');
      }
      return res.json('Deleted')
    })
    .catch(err => res.json(err.message));
});

// @route   POST api/products/add
// @desc    Add a product
// @access  Private
router.post('/add', productUpload, (req, res) => {
  const data = req.body;

  const { errors, isValid } = validateProductInput(data);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Create new product
  let newProduct = new Product({ ...data });

  const files = req.files['image'];
  console.log(files);

  if (files !== undefined) {
    let images = [];
    files.map(file => {
      images.push(fs.readFileSync(file.path));
    });
    newProduct.image = images;
  }

  newProduct
    .save()
    .then(product => res.json("Add Success"))
    .catch(err => {
      console.log(err);
      return res.status(400).json(err.message);
    });
})


// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private
router.patch('/:id', (req, res) => {
  const data = req.body;

  // Create new product
  const newProduct = new Product({ ...data });

  Product.findByIdAndUpdate(req.params.id, newProduct)
    .exec()
    .then(product => {
      if (!product) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json("Update successfull");
    })
    .catch(err => res.json(err.message));
});

// @route   POST api/products/
// @desc    Add a product to wishlist
// @access  Public
router.post('/add-to-wishlist', (req, res) => {
  let user = req.user;

  // Load user model
  const User = require('../../models/User');

  user.wishlist.push(req.body);
  console.log(user);



  User.findById(user.id, user)
    .exec()
    .then(rs => res.json(rs))
    .catch(err => res.status(400).json(err.message));
});

module.exports = router;
