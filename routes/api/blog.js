const express = require('express');
const passport = require('passport');

// Load Product model
const Blog = require('../../models/Blog');

const router = express.Router();

// @route   GET api/blogs/
// @desc    Get all blogs
// @access  Public
router.get('/', (req, res) => {
  let error = null;
  Blog.find({})
    .then(blogs => {
      if (!blogs) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(blogs);
    })
    .catch(err => res.json(err.message));
});

// @route   GET api/blogs/:id
// @desc    Get a blog
// @access  Public
router.get('/:id', (req, res) => {
  let error = null;
  const blogId = req.params.id;
  Blog.findById(blogId)
    .exec()
    .then(blog => {
      if (!blog) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json(blog);
    })
    .catch(err => res.json(err.message));
});

// @route   POST api/blogs/add
// @desc    Add a blog
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const data = req.body;

  // Create new blog
  const newBlog = new Blog({...data})

  newBlog
    .save()
    .then(blog => res.json(blog))
    .catch(err => res.json(err.message));
})

// @route   PUT api/blogs/:id
// @desc    Update a blog
// @access  Private
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const data = req.body;

  // Create new blog
  const newBlog = new Blog({...data});

  Blog.findByIdAndUpdate(req.params.id, newBlog)
    .exec()
    .then(blog => {
      if (!blog) {
        error = 'Not Found';
        return res.status(404).json(error);
      }
      return res.json("Update successfull");
    })
    .catch(err => res.json(err.message));
});

// @route   DELETE api/blogs/:id
// @desc    Delete a blog
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Blog.findOneAndRemove({ _id: req.params.id })
    .exec()
    .then(result => {
      if (result == null) {
        return res.status(400).json('Not Found Blog');
      }
      return res.json('Deleted')
    })
    .catch(err => res.json(err.message));
});




module.exports = router;
