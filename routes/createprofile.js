const create_router = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const Profile = require("../models/createprofile");

create_router.use(cors());
create_router.use(bodyParser.json());

create_router.route("/createprofile").post(async (req, res) => {
  const { firstName, photo, lastName, gender, age, about, userId } = req.body;
  var noimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";

  const newProfile = new Profile({
    user: userId,
    firstName,
    photo: photo || noimg,
    lastName,
    gender,
    age,
    about,
  });
  try {
    const createdProfile = await newProfile.save();
    res.json({ message: "Profile Created", newProfile: createdProfile });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = create_router;
