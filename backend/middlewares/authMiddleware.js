  const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "You are not authorized!" });
  }

  jwt.verify(token.split("Bearer ")[1], "your_jwt_secret", (err, payload) => {
    if (err) {
      throw err;
    }

    req.connectedUser = payload
    next();
  });
};