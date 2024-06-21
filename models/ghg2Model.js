const mongoose = require('mongoose');

// Define the schema for the checkboxes
const checkboxesSchema = new mongoose.Schema({
    email:{
        type:String,
        require: true
    },
  R401A: {
    type: Boolean,
    default: false
  },
  R401B: {
    type: Boolean,
    default: false
  },
  R401C: {
    type: Boolean,
    default: false
  },
  R402A: {
    type: Boolean,
    default: false
  },
  R402B: {
    type: Boolean,
    default: false
  },
  R403B: {
    type: Boolean,
    default: false
  },
  R404A: {
    type: Boolean,
    default: false
  },
  R406A: {
    type: Boolean,
    default: false
  },
  R407A: {
    type: Boolean,
    default: false
  },
  R407B: {
    type: Boolean,
    default: false
  },
  R407C: {
    type: Boolean,
    default: false
  },
  R407D: {
    type: Boolean,
    default: false
  },
  R407E: {
    type: Boolean,
    default: false
  },
  R408A: {
    type: Boolean,
    default: false
  },
  R409A: {
    type: Boolean,
    default: false
  },
  R410A: {
    type: Boolean,
    default: false
  },
  R410B: {
    type: Boolean,
    default: false
  },
  R411A: {
    type: Boolean,
    default: false
  },
  R411B: {
    type: Boolean,
    default: false
  },
  R413A: {
    type: Boolean,
    default: false
  },
  R414A: {
    type: Boolean,
    default: false
  },
  R414B: {
    type: Boolean,
    default: false
  },
  R417A: {
    type: Boolean,
    default: false
  },
  R422A: {
    type: Boolean,
    default: false
  },
  R422D: {
    type: Boolean,
    default: false
  },
  R423A: {
    type: Boolean,
    default: false
  },
  R424A: {
    type: Boolean,
    default: false
  },
  R426A: {
    type: Boolean,
    default: false
  },
  R428A: {
    type: Boolean,
    default: false
  },
  R434A: {
    type: Boolean,
    default: false
  },
  R500: {
    type: Boolean,
    default: false
  },
  R502: {
    type: Boolean,
    default: false
  },
  R504: {
    type: Boolean,
    default: false
  },
  R507: {
    type: Boolean,
    default: false
  },
  R508A: {
    type: Boolean,
    default: false
  },
  R508B: {
    type: Boolean,
    default: false
  },
  Others: {
    type: Boolean,
    default: true
  },
  ProcessVent: {
    type: Boolean,
    default: true
  },
  EquipmentVent: {
    type: Boolean,
    default: true
  },
  MaintenanceTurnaround: {
    type: Boolean,
    default: true
  },
  Leaks: {
    type: Boolean,
    default: true
  },
  LoadingUnloadingActivities: {
    type: Boolean,
    default: true
  },
  CO2: {
    type: Boolean,
    default: true
  },
  CH4: {
    type: Boolean,
    default: true
  },
  N2O: {
    type: Boolean,
    default: true
  },
  CFC: {
    type: Boolean,
    default: true
  },
  HFC: {
    type: Boolean,
    default: true
  },
  PFC: {
    type: Boolean,
    default: true
  },
  HFE: {
    type: Boolean,
    default: true
  },
  PFPMIE: {
    type: Boolean,
    default: true
  }
}); // No need for _id for sub-schema


// Create the model
const Ghg2Model = mongoose.model('Ghg2Model', checkboxesSchema);

module.exports = Ghg2Model;
