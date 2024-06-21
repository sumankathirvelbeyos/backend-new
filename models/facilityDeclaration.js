const mongoose = require('mongoose');

// Define the schema for a facility
const facilitySchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
  facilityName: {
    type: String,
    required: true
  },
  facilityID: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
});

// Create the model
const Facility = mongoose.model('FacilityDeclaration', facilitySchema);

module.exports = Facility;
