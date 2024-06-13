const mongoose = require('mongoose');

// Define the schema
const userConfigurationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
   
  },
  role: {
    type: String,
    required: true,
    
  },
  status: {
    type: String,
    required: true,
   
  }
});

// Create the model
const UserConfiguration = mongoose.model('UserConfiguration', userConfigurationSchema);

module.exports = UserConfiguration;
