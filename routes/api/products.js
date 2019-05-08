const express = require('express');

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
      return res.status(400).json(products);
    })
});

// @route   POST api/products/add
// @desc    Add a product
// @access  Private
router.post('/add', (req, res) => {
  const data = req.body;

  const { errors, isValid } = validateProductInput(data);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Create new product
  const newProduct = new Product({...data})

  newProduct
  .save()
  .then(product => res.json(product))
  .catch(err => console.log(err));
})

module.exports = router;
