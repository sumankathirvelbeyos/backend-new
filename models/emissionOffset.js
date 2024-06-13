const mongoose = require('mongoose');

// Define the schema
const offsetsPageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  emissionOffset: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  typeOfOffset: {
    type: String,
    required: true
  }
});

// Create the model
const OffsetsPage = mongoose.model('OffsetsPage', offsetsPageSchema);

module.exports = OffsetsPage;
