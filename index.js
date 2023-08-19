const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const authValidation = require("./middleware/middleware");

// requiring Routes
const userRoutes = require("./routes/user");
const createRoutes = require("./routes/createprofile");
const preferenceRoutes = require("./routes/addpreference");
const dashboardRoutes = require("./routes/dashboard");

// env config
env.config();
const url = process.env.ATLAS_URI;

// db connection
moongose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// middleware
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

//routes
app.use("/user", userRoutes);
app.use("/", authValidation, createRoutes);
app.use("/", authValidation, preferenceRoutes);
app.use("/", authValidation, dashboardRoutes);

// listening to server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
