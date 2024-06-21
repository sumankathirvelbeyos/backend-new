const mongoose = require('mongoose');

// Define the schema for the login credentials
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure uniqueness of email addresses
  },
  password: {
    type: String,
    required: true
  }
});

// Create the model
const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
