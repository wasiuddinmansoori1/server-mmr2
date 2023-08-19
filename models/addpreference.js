const mongoose = require("mongoose");
const User = require("./user");
const tutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entering Information",
    required: true,
  },
  genderPreference: {
    type: String,
    required: true,
  },
  accommodationType: {
    type: String,
    required: true,
  },
  preferredAge: {
    type: String,
    required: true,
  },
  topPreference: {
    type: String,
    required: true,
  },
});

const UserPreference = new mongoose.model("User Preference", tutSchema);

module.exports = UserPreference;
