  const jwt = require("jsonwebtoken");
  require('dotenv').config()

module.exports = (req, res, next) => {
  let token = req.header("Authorization");
  let secretKey = process.env.SECRET_KEY


  if (!token) {
    return res.status(401).json({ message: "You are not authorized!" });
  }

  jwt.verify(token.split("Bearer ")[1], secretKey, (err, payload) => {
    if (err) {
      throw err;
    }

    req.connectedUser = payload
    next();
  });
};