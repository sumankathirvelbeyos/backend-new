const mongoose = require('mongoose');

// Define the schema
const processEmissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
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
  GasType: {
    type: String,
    required: true
  },
  Source: {
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
  fileUrl: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  emission: {
    type: Number,
    required: true
  },
  status: {
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
  },
  button: {
    text: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  }
});

// Create the model
const ProcessEmission = mongoose.model('ProcessEmission', processEmissionSchema);

module.exports = ProcessEmission;
