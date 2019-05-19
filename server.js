const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/api/users');
const admin = require('./routes/api/admin');
const products = require('./routes/api/products');
const cart = require('./routes/api/cart');
const blog = require('./routes/api/blog');
const wishlist = require('./routes/api/wishlist');

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
// const db = require('./config/keys').mogoURI;

// Connect to MongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

mongoose.connect('mongodb://localhost/shopping-cart', { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/admin', admin);
app.use('/api/products', products);
app.use('/api/cart', cart);
app.use('/api/blogs', blog);
app.use('/api/wishlist', wishlist);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on  http://localhost:${port}/`));