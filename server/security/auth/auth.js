const jwt = require("jsonwebtoken");
require("dotenv/config");
module.exports = async (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token) {
      return res.status(403).json("Not authorized");
    }
    const payload = jwt.verify(token, process.env.TOKEN);
    req.user = payload.user;
  } catch (error) {
    res.status(500).json(error.message);
  }
};
