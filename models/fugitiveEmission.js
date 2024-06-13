const mongoose = require('mongoose');

// Define the schema
const fugitiveEmissionSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },facilityCode: {
    type: String,
    required: true
  },
  facilityName: {
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
  typeOfGasEmitted: {
    type: String,
    required: true
  },
  refrigerantChargedNew: {
    type: Number,
    required: true
  },
  capacityOfEquipmentNew: {
    type: Number,
    required: true
  },
  refrigerantChargedExisting: {
    type: Number,
    required: true
  },
  capacityOfEquipmentRetiring: {
    type: Number,
    required: true
  },
  refrigerantRecoveredRetiring: {
    type: Number,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  }
});

// Create the model
const FugitiveEmission = mongoose.model('FugitiveEmission', fugitiveEmissionSchema);

module.exports = FugitiveEmission;
