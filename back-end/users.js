const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();

// User schema and model
const userSchema = new mongoose.Schema({
    email: String
});

// create a User model from the User schema
const User = mongoose.model('User', userSchema);

// create a new user
router.post('/', async (req, res) => {
  // Make sure that the form coming from the browser includes all required fields,
  // otherwise return an error. A 400 error means the request was malformed.
  if (!req.body.email)
    return res.status(400).send({
      message: "email is required"
    });

  try {
    // create a new user and save it to the database
    const user = new User({
      email: req.body.email
    });
    await user.save();

    // send back a 200 OK response, along with the user that was created
    return res.send({
      user: user
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: User
};