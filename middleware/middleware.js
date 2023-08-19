require("dotenv").config();
const jwt = require("jsonwebtoken");

// Middleware for authorization of user to check if logged in
const loggedIn = async (req, res, next) => {
  let token = req.headers.authorization; 
  console.log( "From Middleware: ",token);
  try {
    // auth header
    if (token) {
       token = req.headers.authorization.split(" ")[1];
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        if (payload) {
          req.user = payload;
          next();
        } else {
          res.status(400).json({ error: "token verification failed" });
        }
      } else {
        res.status(400).json({ error: "malformed auth header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = loggedIn;
