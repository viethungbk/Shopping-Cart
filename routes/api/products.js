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
// @desc    Delete a product by id
// @access  Private
router.delete('/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
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
router.post('/add', passport.authenticate('jwt-admin', { session: false }), productUpload, (req, res) => {
  const data = req.body;

  const { errors, isValid } = validateProductInput(data);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Create new product
  let newProduct = new Product({ ...data });

  const files = req.files['image'];

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


// @route   PATcH api/products/:id
// @desc    Update a product
// @access  Private
router.patch('/:id', passport.authenticate('jwt-admin', { session: false }), productUpload, (req, res) => {
  const data = req.body;

  // Create new product with older product id
  const newProduct = new Product({ _id: req.params.id, ...data });

  const files = req.files['image'];

  if (files !== undefined) {
    let images = [];
    files.map(file => {
      images.push(fs.readFileSync(file.path));
    });
    newProduct.image = images;
  }

  Product.findByIdAndUpdate(req.params.id, newProduct)
    .exec()
    .then(product => {
      if (!product) {
        error = 'Not Found';
        return res.status(404).json(error);
      } else {
        return res.json("Update successfull");
      }
    })
    .catch(err => res.json(err.message));
});

module.exports = router;
