const jwt = require("jsonwebtoken");
require("dotenv/config");

const createToken = (id) => {
  const payload = {
    user: id,
  };

  return jwt.sign(payload, process.env.TOKEN, { expiresIn: 60 * 60 });
};

module.exports = { createToken };
