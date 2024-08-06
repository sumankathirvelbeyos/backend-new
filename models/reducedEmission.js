const mongoose = require('mongoose');

// Define the schema
const reducedEmissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },description: {
    type: String,
    required: true
  }
  ,year: {
    type: String,
    required: true
  },
  emissionReduced: {
    type: Number,
    required: true
  },
  facilityId: {
    type: String,
    required: true
  },
  facility: {
    type: String,
    required: true
  }
});

// Create the model
const ReducedEmission = mongoose.model('ReducedEmission', reducedEmissionSchema);

module.exports = ReducedEmission;
