// File: models/User.js

// Import mongoose
const mongoose = require('mongoose');

// Define the User schema
// A schema is like a blueprint for your data. It tells Mongoose what fields a document in the collection should have.
const userSchema = new mongoose.Schema({
  // The username field will be a String.
  // We'll set 'required: true' to ensure a username is always provided.
  // 'unique: true' ensures no two users can have the same username.
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true // trim() removes any whitespace from the beginning and end of the string
  },
  // The email field will also be a String, required, and unique.
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // A simple regex to validate the email format.
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email address'
    ]
  },
  // The password field will be a String and is required.
  // For security, we will store a hashed password here, not the plain text password.
  password: {
    type: String,
    required: true,
  },
  // The createdAt field will automatically store the date and time a user was created.
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the User model from the userSchema.
// A model is what you use to interact with the database. It provides methods like .find(), .create(), etc.
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other files (e.g., your routes).
module.exports = User;
