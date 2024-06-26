const mongoose = require('mongoose');

// Define the schema
const facilitySchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
  year: { type: String, required: true },
  month: { type: String, required: true },
  facilityCode: { type: String, required: true },
  facilityName: { type: String, required: true },
  emissionSource: { type: String, required: true },
  fuelType: { type: String, required: true },
  quantity: { type: Number, required: true },
  siUnits: { type: String, required: true },
  fileUrl: { type: String, required: true }
});

// Create the model
const StationaryCombustion = mongoose.model('StatioonaryCombustion', facilitySchema);

module.exports = StationaryCombustion;
