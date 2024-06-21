const mongoose = require('mongoose');

// Define the schema for emission management entries
const emissionManagementSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
  type: {
    type: String,
    required: true
  },
  facility: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  user: {
    type: String,
    default: ""  // Assuming user can be optional and can have an empty string as default
  }
});

// Create the model
const EmissionManagement = mongoose.model('EmissionManagement', emissionManagementSchema);

module.exports = EmissionManagement;
