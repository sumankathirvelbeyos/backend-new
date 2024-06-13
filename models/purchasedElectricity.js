const mongoose = require('mongoose');

// Define the schema
const PurchasedElectricitySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  }, year: {
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
  electricityType: {
    type: String,
    required: true
  },
  consumption: {
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
  }
});

// Create the model
const PurchasedElectricity = mongoose.model('PurchasedElectricity', PurchasedElectricitySchema);

module.exports = PurchasedElectricity;
