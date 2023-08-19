const create_router = require("express").Router();
const cors = require("cors");
create_router.use(cors());
const bodyParser = require("body-parser");
const Profile = require("../models/createprofile");
create_router.use(bodyParser.json());
create_router.use(cors());
// const loggedIn = require("../middleware/middleware");

create_router.route("/createprofile").post(async (req, res) => {
  const { firstName, lastName, Gender, age, about } = req.body;
  const { id: userId } = req.user;
console.log(req.user);  
  console.log(req.body);
  const newProfile = new Profile({
    user: userId,
    firstName,
    lastName,
    Gender,
    age,
    about,
  });
  // console.log(newProfile);

  newProfile
    .save()
    .then(() => res.json("Profile Created"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = create_router;
