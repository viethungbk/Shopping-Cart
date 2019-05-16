const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Validate

  return {
    errors,
    isValid: isEmpty(errors)
  };
};