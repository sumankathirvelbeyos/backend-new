const mongoose = require('mongoose');

// Define the schema
const targetSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
  targetType: { type: String, required: true },
  targetYear: { type: String, required: true },
  baseYear: { type: String, required: true },
  scope1Emissions: { type: String, required: true },
  scope2Emissions: { type: String, required: true },
  reductionPercentage: { type: String, required: true }
});

// Create the model
const Target = mongoose.model('Target', targetSchema);

module.exports = Target;
