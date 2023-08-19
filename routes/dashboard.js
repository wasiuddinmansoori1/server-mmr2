const express = require("express");
const router = express.Router();
const Profile = require("../models/createprofile");
const preference = require("../models/addpreference");

router.get("/dashboard", async (req, res) => {
  console.log("USER", req.user);

  const { id: userId } = req.user;
  try {
    const preferences = await preference.find({ user: userId });
    // gender Logic started TODO: Need to complete the logic
    let profiles = [
      {
        Gender:
          "Data not found Please Try Again Later Might Be Someone Visible For Your Preference",
      },
    ];
    const { genderPreference, preferredAge } = preferences[0];

    if (genderPreference === "Female") {
      if (preferredAge === "18-22") {
        profiles = await Profile.find({
          Gender: "Female",
          age: { $gte: 18, $lte: 22 },
        });
      } else if (preferredAge === "23-27") {
        profiles = await Profile.find({
          Gender: "Female",
          age: { $gte: 23, $lte: 27 }, // 23 27
        });
      } else if (preferredAge === "28-32") {
        profiles = await Profile.find({
          Gender: "Female",
          age: { $gte: 28, $lte: 32 },
        });
      } else if (preferredAge === "33-37") {
        profiles = await Profile.find({
          Gender: "Female",
          age: { $gte: 33, $lte: 37 },
        });
      }
    } else if (genderPreference === "Male") {
      if (preferredAge === "18-22") {
        profiles = await Profile.find({
          Gender: "Male",
          age: { $gte: 18, $lte: 22 },
        });
      } else if (preferredAge === "23-27") {
        profiles = await Profile.find({
          Gender: "Male",
          age: { $gte: 23, $lte: 27 },
        });
      } else if (preferredAge === "28-32") {
        profiles = await Profile.find({
          Gender: "Male",
          age: { $gte: 28, $lte: 32 },
        });
      } else if (preferredAge === "33-37") {
        profiles = await Profile.find({
          Gender: "Male",
          age: { $gte: 33, $lte: 37 },
        });
      }
    } else if (genderPreference === "Transgender") {
      if (preferredAge === "18-22") {
        profiles = await Profile.find({
          Gender: "Transgender",
          age: { $gte: 18, $lte: 22 },
        });
      } else if (preferredAge === "23-27") {
        profiles = await Profile.find({
          Gender: "Transgender",
          age: { $gte: 23, $lte: 27 },
        });
      } else if (preferredAge === "28-32") {
        profiles = await Profile.find({
          Gender: "Transgender",
          age: { $gte: 28, $lte: 32 },
        });
      } else if (preferredAge === "33-37") {
        profiles = await Profile.find({
          Gender: "Transgender",
          age: { $gte: 33, $lte: 37 },
        });
      }
    } else if (genderPreference === "Non-Binary") {
      if (preferredAge === "18-22") {
        profiles = await Profile.find({
          Gender: "Non-Binary",
          age: { $gte: 18, $lte: 22 },
        });
      } else if (preferredAge === "23-27") {
        profiles = await Profile.find({
          Gender: "Non-Binary",
          age: { $gte: 23, $lte: 27 },
        });
      } else if (preferredAge === "28-32") {
        profiles = await Profile.find({
          Gender: "Non-Binary",
          age: { $gte: 28, $lte: 32 },
        });
      } else if (preferredAge === "33-37") {
        profiles = await Profile.find({
          Gender: "Non-Binary",
          age: { $gte: 33, $lte: 37 },
        });
      }
    }

    res.json({ profiles });

    // res.json({ profiles, preferences });
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({ message: "Dashboard API Failed", err: error.message });
  }
});

module.exports = router;
