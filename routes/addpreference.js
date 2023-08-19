const create_router = require("express").Router();
const cors = require("cors");
create_router.use(cors());
const bodyParser = require("body-parser");
// const Profile  = require("../models/createprofile");
const preference = require("../models/addpreference");
create_router.use(bodyParser.json());
create_router.use(cors());
// const { loggedIn } = require("../middleware/middleware");


create_router.route("/addpreference").post( async  (req, res) => {
    // console.log(req.body);
    const { genderPreference, accommodationType, preferredAge, topPreference } = req.body;
    const { id: userId } = req.user;
  
    // console.log(req.body);
    const newPreference = new preference({
      user: userId,
      genderPreference,
        accommodationType,
        preferredAge,
        topPreference,
    });
  
    newPreference
      .save()
      .then(() => res.json("Profile Created"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
  module.exports = create_router;