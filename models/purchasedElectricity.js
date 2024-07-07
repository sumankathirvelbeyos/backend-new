const mongoose = require('mongoose');

// Define the schema
const PurchasedElectricitySchema = new mongoose.Schema({
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
  typeofElectricity: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  units: {
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
  reportingYear: {
    type: String,
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
  }
});

// Create the model
const PurchasedElectricity = mongoose.model('PurchasedElectricity', PurchasedElectricitySchema);

module.exports = PurchasedElectricity;
