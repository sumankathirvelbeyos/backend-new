const mongoose = require('mongoose');

// Define the schema for the checkboxes and additional fields
const checkboxesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
      },
  NationalGrid: {
    type: Boolean,
    default: false
  },
  Solar: {
    type: Boolean,
    default: false
  },
  Wind: {
    type: Boolean,
    default: false
  },
  Hydro: {
    type: Boolean,
    default: false
  },
  Nuclear: {
    type: Boolean,
    default: false
  },
  NaturalGas: {
    type: Boolean,
    default: false
  },
  Biogas: {
    type: Boolean,
    default: false
  },
  coal: {
    type: Boolean,
    default: false
  },
  PurchasedGoodsServices: {
    type: Boolean,
    default: false
  },
  CapitalGoods: {
    type: Boolean,
    default: false
  },
  FuelEnergyActivities: {
    type: Boolean,
    default: false
  },
  UpstreamTransportation: {
    type: Boolean,
    default: false
  },
  WasteFromOperations: {
    type: Boolean,
    default: false
  },
  BusinessTravel: {
    type: Boolean,
    default: false
  },
  EmployeeCommute: {
    type: Boolean,
    default: false
  },
  DownstreamTransportation: {
    type: Boolean,
    default: false
  },
  UpstreamAssets: {
    type: Boolean,
    default: true
  },
  UseOfSoldProducts: {
    type: Boolean,
    default: true
  },
  ProcessingOfSoldProducts: {
    type: Boolean,
    default: true
  },
  EOLSoldProducts: {
    type: Boolean,
    default: true
  },
  Investment: {
    type: Boolean,
    default: true
  },
  Franchise: {
    type: Boolean,
    default: true
  },
  DownstreamAssets: {
    type: Boolean,
    default: true
  },
  ServiceProviderName: {
    type: String,
    default: ""
  },
  EmissionFactor: {
    type: String,
    default: ""
  },
  SIUnit: {
    type: String,
    default: ""
  }
}); // No need for _id for sub-schema



// Create the model
const Ghg3Model = mongoose.model('Ghg3Schema', checkboxesSchema);

module.exports = Ghg3Model;
