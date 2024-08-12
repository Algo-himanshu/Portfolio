const mongoose = require("mongoose");

// Define the schema
const emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    trim: true, // Trims whitespace
  },
  email: {
    type: String,
    required: true, // Email is required
    trim: true,
  },
  subject: {
    type: String,
    required: true, // Subject is required
    trim: true,
  },
  message: {
    type: String,
    required: true, // Message is required
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

// Create the model from the schema
const Email = mongoose.model("Email", emailSchema);

// Export the model
module.exports = Email;
