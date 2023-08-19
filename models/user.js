const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});   
const User = mongoose.model("Entering Information", userSchema);
module.exports =  {User} ;
