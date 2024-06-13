const mongoose = require('mongoose');

// Define the schema
const companyProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  organizationName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  natureOfBusiness: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true,
   
  },
  numberOfEmployees: {
    type: Number,
    required: true
  }
});

// Create the model
const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

module.exports = CompanyProfile;
