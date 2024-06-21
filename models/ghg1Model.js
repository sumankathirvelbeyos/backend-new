const mongoose = require('mongoose');

// Define the schema for the checkboxes
const checkboxesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
      },
  Boiler: {
    type: Boolean,
    default: false
  },
  Furnace: {
    type: Boolean,
    default: false
  },
  Dryer: {
    type: Boolean,
    default: false
  },
  Kiln: {
    type: Boolean,
    default: false
  },
  Flares: {
    type: Boolean,
    default: false
  },
  Incinerator: {
    type: Boolean,
    default: false
  },
  PowerGenerator: {
    type: Boolean,
    default: false
  },
  ThermicFluidHeater: {
    type: Boolean,
    default: false
  },
  ProcessHeaterOven: {
    type: Boolean,
    default: false
  },
  CombustionTurbine: {
    type: Boolean,
    default: false
  },
  ThermalOxidizers: {
    type: Boolean,
    default: false
  },
  Others: {
    type: Boolean,
    default: false
  },
  Car: {
    type: Boolean,
    default: false
  },
  Crane: {
    type: Boolean,
    default: false
  },
  ExecutiveJet: {
    type: Boolean,
    default: true
  },
  Motorcycle: {
    type: Boolean,
    default: true
  },
  Forklift: {
    type: Boolean,
    default: true
  },
  FreightTrain: {
    type: Boolean,
    default: false
  },
  LightDutyTruck: {
    type: Boolean,
    default: true
  },
  ConstructionVehicle: {
    type: Boolean,
    default: false
  },
  CommuterTrain: {
    type: Boolean,
    default: true
  },
  HeavyDutyTruck: {
    type: Boolean,
    default: false
  },
  AgricultureVehicle: {
    type: Boolean,
    default: false
  },
  Ship: {
    type: Boolean,
    default: true
  },
  PassengerBus: {
    type: Boolean,
    default: true
  },
  CommercialFlight: {
    type: Boolean,
    default: true
  },
  Boat: {
    type: Boolean,
    default: true
  },
  PassengerVan: {
    type: Boolean,
    default: true
  },
  Otherssource: {
    type: Boolean,
    default: true
  }
}); // No need for _id for sub-schema



// Create the model
const Ghg1 = mongoose.model('Ghg1', checkboxesSchema);

module.exports = Ghg1;
