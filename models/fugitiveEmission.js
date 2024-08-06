const mongoose = require('mongoose');

// Define the schema
const fugitiveEmissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true
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
  refrigerantChargedNew: {
    type: String,
    required: true
  },
  capacityOfEquipmentNew: {
    type: String,
    required: true
  },
  refrigerantChargedExisting: {
    type: String,
    required: true
  },
  capacityOfEquipmentRetiring: {
    type: String,
    required: true
  },
  refrigerantRecoveredRetiring: {
    type: String,
    required: true
  },
  emissions: {
    type: String,
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
  monthlyStatus: {
    type: Number,
    required: true
  }
});

// Create the model
const FugitiveEmission = mongoose.model('FugitiveEmission', fugitiveEmissionSchema);

module.exports = FugitiveEmission;
