const mongoose = require("mongoose");

const createProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entering Information',
  },
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  Gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});


const Profile = mongoose.model("Profile", createProfileSchema);
module.exports = Profile;
