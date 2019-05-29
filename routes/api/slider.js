const express = require('express');
const multer = require('multer');
const fs = require('fs');
const passport = require('passport');

const upload = multer({ dest: '../../public/uploads' });
const sliderUpload = upload.fields([
  { name: 'sliderheader' },
  { name: 'bigtext' },
  { name: 'detail' },
  { name: 'image' }
]);

// Load Product model
const Slider = require('../../models/Slider');

const router = express.Router();

// @route   GET api/sliders/
// @desc    Get all sliders
// @access  Public
router.get('/', (req, res) => {
  let error = null;
  Slider.find({})
    .then(sliders => {
      if (!sliders) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(sliders);
    })
});

// @route   GET api/sliders/:id
// @desc    Get a slider by id
// @access  Public
router.get('/:id', (req, res) => {
  Slider.findById(req.params.id)
    .exec()
    .then(slider => {
      if (!slider) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(slider);
    })
    .catch(err => res.json(err.message));
});


// @route   DELETE api/sliders/:id
// @desc    Delete a slider by id
// @access  Private
router.delete('/:id', passport.authenticate('jwt-admin', { session: false }), (req, res) => {
  Slider.findOneAndRemove({ _id: req.params.id })
    .exec()
    .then(result => {
      if (result == null) {
        return res.status(400).json('Not Found Slider');
      }
      return res.json('Deleted')
    })
    .catch(err => res.json(err.message));
});

// @route   POST api/sliders/add
// @desc    Add a slider
// @access  Private
router.post('/add', passport.authenticate('jwt-admin', { session: false }), sliderUpload, (req, res) => {
  const data = req.body;

  // Create new slider
  let newSlider = new Slider({ ...data });

  const file = req.files['image'][0];

  if (file !== undefined) {
    newSlider.image = fs.readFileSync(file.path)
  }

  newSlider
    .save()
    .then(slider => res.json("Add Success"))
    .catch(err => {
      console.log(err);
      return res.status(400).json(err.message);
    });
})


// @route   PATcH api/sliders/:id
// @desc    Update a slider
// @access  Private
router.patch('/:id', passport.authenticate('jwt-admin', { session: false }), sliderUpload, (req, res) => {
  const data = req.body;

  // Create new slider with older slider id
  const newSlider = new Slider({ _id: req.params.id, ...data });

  const file = req.files['image'][0];

  if (file !== undefined) {
    newSlider.image = fs.readFileSync(file.path)
  }

  Slider.findByIdAndUpdate(req.params.id, newSlider)
    .exec()
    .then(slider => {
      if (!slider) {
        error = 'Not Found';
        return res.status(404).json(error);
      } else {
        return res.json("Update successfull");
      }
    })
    .catch(err => res.json(err.message));
});

module.exports = router;
