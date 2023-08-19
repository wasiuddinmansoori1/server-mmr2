require("dotenv").config();
const user_router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { loggedIn } = require("../middleware/middleware");

// KEY
const KEY  = process.env.SECRET_KEY;

user_router.get("/", (req, res) => {
  res.send("hie");
});

user_router.post("/signup",  async (req, res) => {
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    let salt = bcrypt.genSaltSync(10);
    let hashedpassword = await bcrypt.hash(req.body.password, salt);
    // console.log(hashedpassword);
    const newUser = await User.create({
      ...req.body,
      password: hashedpassword,
    });
    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

user_router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (user.email) {
      const result = await bcrypt.compare(req.body.password, user.password);
      // console.log(result);
      if (result) {
        const authToken = jwt.sign({ email: user.email, id: user._id }, KEY);
        res.json({ authToken });
      } else {
        res.status(400).json({ message: "password doesn't match" });
      }
    } else {
      res.status(400).json({ message: "User doesn't exist" });
    }
  } catch (error) {
    res.status(500).send({ message: "User Not Found Please Register/SignUp" });
  }
});

module.exports = user_router;
