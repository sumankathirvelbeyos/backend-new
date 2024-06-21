const mongoose = require('mongoose');

// Define the schema for BoundarySetting
const boundarySettingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
      },
  CalendarYear: {
    type: Boolean,
    default: false
  },
  FiscalYear: {
    type: Boolean,
    default: false
  },
  Year2024: {
    type: Boolean,
    default: false
  },
  Year2023: {
    type: Boolean,
    default: false
  },
  Year2022: {
    type: Boolean,
    default: false
  },
  Year2021: {
    type: Boolean,
    default: false
  },
  Year2020: {
    type: Boolean,
    default: false
  },
 
    NumberOfFacilities: {
      type: String,
      default: ""
    },
    StartingMonth: {
      type: String,
      default: ""
    },
    EndingMonth: {
      type: String,
      default: ""
    },
    BaseYear: {
      type: String,
      default: ""
    },
    Scope1Emissions: {
      type: String,
      default: ""
    },
    Scope2Emissions: {
      type: String,
      default: ""
    },
    Scope3Emissions: {
      type: String,
      default: ""
    }
  
});

// Create the model
const BoundarySetting = mongoose.model('BoundarySetting', boundarySettingSchema);

module.exports = BoundarySetting;
