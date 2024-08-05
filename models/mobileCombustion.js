const mongoose = require('mongoose');

// Define the schema
const mobileCombustionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  facilityCode: {
    type: String,
    required: true
  },
  facilityName: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  siUnits: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  fileUrl: {
    type: String,
    default: ""
  },
  emissions: {
    type: Number,
    required: true
  },
  monthlyStatus: {
    type: Number,
    required: true
  },
  emissionType: {
    type: String,
    required: true
  },
  responsibility: {
    type: String,
    required: true
  }
});

// Create the model
const MobileCombustion = mongoose.model('MobileCombustion', mobileCombustionSchema);

module.exports = MobileCombustion;
